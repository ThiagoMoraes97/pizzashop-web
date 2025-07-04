import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form"
import { toast } from 'sonner';
import { Link, useNavigate } from "react-router";

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email()
})

type SignUpForm = z.infer<typeof signUpFormSchema>


export function SignUp() {
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignUpForm>()

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Restaurante cadastrado com sucesso!', {
      action: {
        label: 'Login',
        onClick: () => navigate('/sign-in')
      }
    })
  }

  return (
    <>
      <title>Cadastro | pizza.shop</title>
      <div className="p-8">

        <Button variant={"ghost"} asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece as suas vendas!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input id="restaurantName" type="text" {...register("restaurantName")}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input id="managerName" type="text" {...register("managerName")}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register("phone")}/>
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">Finalizar cadastro</Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continar, você concorda com os nossos <a href="#" className="underline underline-offset-4">Termos de Serviço</a> e <a href="#" className="underline underline-offset-4">Política de Privacidade</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
