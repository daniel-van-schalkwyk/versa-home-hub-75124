import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
});

export const EmailSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when the Kickstarter campaign goes live.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Notified at Launch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be the first to know when our Kickstarter campaign goes live and unlock exclusive early bird rewards.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-fade-in">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      className="h-12 bg-background/50 backdrop-blur-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-12 px-8"
            >
              {isSubmitting ? "Signing up..." : "Notify Me"}
            </Button>
          </form>
        </Form>

        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
