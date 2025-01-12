import { TypeColorLabel, TypeSizeLabel } from "@/@types/TitleTypes";
import Tag from "@/components/Tag/Tag";
import Title from "@/components/Title/Title";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid>
      <Title
        title={"Olá, eu sou Pamela Otéro"}
        typeSizeLabel={TypeSizeLabel.MEDIUM}
        typeColorLabel={TypeColorLabel.PRIMARY}
      />
      <Tag label="Hello" color={TypeColorLabel.PRIMARY} />
    </Grid>
  );
}
