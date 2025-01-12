import { TypeColorLabel, TypeSizeLabel } from "@/@types/TitleTypes";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <div className="bg-primary text-white h-screen flex items-center justify-center">
      <h1 className="text-4xl">Bem-vindo ao tema personalizado!</h1>
      <Title
        title={"Olá, eu sou Pamela Otéro"}
        typeSizeLabel={TypeSizeLabel.MEDIUM}
        typeColorLabel={TypeColorLabel.PRIMARY}
      />
    </div>
  );
}
