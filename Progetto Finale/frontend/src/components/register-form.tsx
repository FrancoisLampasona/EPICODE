import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import BenefitsPageGraphic from "@/assets/ContactUsPageGraphic.png";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 py-30", className)} {...props}>
      <Card className="overflow-hidden max-w-4xl mx-auto w-full md:w-screen bg-[#9089fdc9]">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8 w-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Crea un account</h1>
                <p>Registrati per iniziare la tua esperienza</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Mario Rossi"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="esempio@mail.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Conferma Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>

              <Button
                type="submit"
                className="w-full text-white bg-[#ffc13289] hover:bg-[#ffc132]"
              >
                Registrati
              </Button>

              <div className="text-center text-sm">
                Hai già un account?{" "}
                <Link
                  to="/login"
                  className="underline underline-offset-4 text-[#FFC132]"
                >
                  Accedi
                </Link>
              </div>
            </div>
          </form>

          {/* Right image (solo su desktop) */}
          <div className="relative hidden bg-[#dad2f5] md:block">
            <img
              src={BenefitsPageGraphic}
              alt="Immagine"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
