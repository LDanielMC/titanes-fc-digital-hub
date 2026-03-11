"use client";

import { useState } from "react";
import { Facebook, Instagram, User, Mail, MessageSquare, Send, Loader2, Phone, ChevronRight, MapPin } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo válida.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        publicKey
      );
      toast.success("¡Mensaje enviado con éxito!", {
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("¡Ups! Hubo un error al enviar tu mensaje.", {
        description: "Por favor, inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres unirte a Titanes FC? Rellena el
            formulario o contáctanos por cualquiera de nuestros medios.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna del Formulario */}
          <ScrollAnimation>
            <Card className="p-8 md:p-10 border-2 border-border/50 shadow-lg bg-card">
              <h3 className="text-2xl font-bold text-primary mb-6">Envíanos un mensaje</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="w-4 h-4 text-accent" /> Nombre
                          completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu nombre"
                            {...field}
                            className="border-border focus-visible:ring-accent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-accent" /> Correo
                          electrónico
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="tu@correo.com"
                            {...field}
                            className="border-border focus-visible:ring-accent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-accent" />{" "}
                          Mensaje
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escribe tu mensaje aquí..."
                            {...field}
                            rows={5}
                            className="border-border focus-visible:ring-accent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-6 rounded-full transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        < Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar mensaje"
                    )}
                  </Button>   
                </form>
              </Form>
            </Card>
          </ScrollAnimation>

          {/* Columna de Información de Contacto */}
          <ScrollAnimation delay="200ms" className="flex flex-col gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Otras formas de contactar</h3>
                <p className="text-muted-foreground">
                  Si prefieres, puedes contactarnos directamente a través de nuestras redes.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <a href="https://wa.me/5217771208631" target="_blank" rel="noopener noreferrer">
                  <Card className="p-4 group transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 border-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Phone className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                        <div className="text-left">
                          <p className="font-bold text-primary">WhatsApp</p>
                          <p className="text-sm text-muted-foreground">777 120 8631</p>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1" />
                    </div>
                  </Card>
                </a>
                {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
                  <Card className="p-4 group transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 border-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Facebook className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                        <div className="text-left">
                          <p className="font-bold text-primary">Facebook</p>
                          <p className="text-sm text-muted-foreground">/TitanesFC</p>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1" />
                    </div>
                  </Card>
                {/* </a> */}
                {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
                  <Card className="p-4 group transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 border-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Instagram className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                        <div className="text-left">
                          <p className="font-bold text-primary">Instagram</p>
                          <p className="text-sm text-muted-foreground">@TitanesFC</p>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1" />
                    </div>
                  </Card>
                {/* </a> */}
              </div>
            </div>

            {/* Sección del Mapa */}
            <div className="space-y-6">
               <div>
                <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-accent" />
                  Nuestra Ubicación
                </h3>
                <p className="text-muted-foreground">
                  Encuéntranos aquí para los entrenamientos.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border-2 border-border/50 shadow-lg">
                {/* 
                  TODO: Reemplaza este iframe con el tuyo de Google Maps.
                  1. Ve a Google Maps y busca tu ubicación.
                  2. Haz clic en "Compartir" -> "Insertar un mapa".
                  3. Copia el código HTML y pégalo aquí.
                */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.256716790068!2d-99.1902513!3d18.9200278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf87605076f1%3A0x5105c4845da39999!2sUnidad%20Deportiva%20Fidel%20Vel%C3%A1zquez!5e0!3m2!1ses-419!2smx!4v1764229495529!5m2!1ses-419!2smx" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
