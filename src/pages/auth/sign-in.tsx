import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form"
import { toast } from 'sonner';
import { Link } from  'react-router'

const signInFormSchema = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInFormSchema>


export function SignIn() {
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('E-mail enviado com sucesso!', {
      description: 'Acesse o seu e-mail para realizar a autenticação.',
      action: {
        label: 'Reenviar',
        onClick: () => {
          handleSignIn(data)
        }
      }
    })
  }

  return (
    <>
      <title>Login | pizza.shop</title>
      <div className="p-8">

        <Button variant={"ghost"} asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanha as vendas pelo painel do parceiro!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")}/>
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
