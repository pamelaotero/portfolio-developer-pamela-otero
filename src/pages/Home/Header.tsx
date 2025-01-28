"use client";
import { TypeSizeButton, TypeVariantButton } from "@/@types/ButtonTypes";
import { TypeColorLabel, TypeSizeLabel } from "@/@types/TitleTypes";
import ButtonCustom from "@/components/ButtonCustom";
import Title from "@/components/Title/Title";
import { Box, Grid } from "@mui/material";
import { handleDownload } from "./handlers/HeaderHandlers";
import TextCustom from "@/components/TextCustom";

export default function Header() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} sx={{ border: "2px solid green" }}>
        <Title
          title={"Pamela Otéro"}
          typeSizeLabel={TypeSizeLabel.LARGE}
          typeColorLabel={TypeColorLabel.PRIMARY}
          isBold
        />
        <Title
          title={"Front End Engineer"}
          typeSizeLabel={TypeSizeLabel.MEDIUM}
          typeColorLabel={TypeColorLabel.PRIMARY}
          isBold
        />

        <TextCustom label="Transforming complex problems into seamless, user-focused interfaces through high-quality front-end development." />

        <Grid sx={{ marginTop: "1rem" }} container display={"flex"} spacing={1}>
          <Grid item>
            <ButtonCustom
              onClick={() => console.log("baixar cv")}
              size={TypeSizeButton.LARGE}
              variant={TypeVariantButton.CONTAINED}
              title={"CONTACT ME"}
            />
          </Grid>

          <Grid item>
            <ButtonCustom
              onClick={handleDownload}
              size={TypeSizeButton.LARGE}
              variant={TypeVariantButton.OUTLINED}
              title={"DOWNLOAD CV"}
              icon={<div>a</div>}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} sx={{ border: "2px solid green" }}>
        {/* <Box
          component="img"
          sx={{
            width: "60%",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
          }}
          alt="Imagem de exemplo"
          src="https://media.licdn.com/dms/image/v2/D4D03AQF5MkvYU1_g7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721072975897?e=1742428800&v=beta&t=g9v5AHQ4H3D_hMv96hiuiUrjEnNFW9ZNuAz6FUCgb3o" // URL da imagem
        /> */}
        {/* TODO: inserir opção de dark mode e tradução */}
        <TextCustom
          label="I’m passionate about solving problems and building interfaces that
          deliver a great user experience. My work focuses on creating intuitive"
        />

        <TextCustom
          label="I have experience both in creating projects from scratch and
          maintaining existing code. I’m enthusiastic about the process of
          building a product, enjoy understanding business requirements, and
          have the ability to make technical decisions that bring improvements
          to the project."
        />
        <TextCustom
          label=" I’m ready to take on new challenges and deliver value in front-end
          development through creative solutions."
        />

        <TextCustom
          label="In my spare time, I practice martial arts, and I enjoy spending time
          with my partner and family."
        />
      </Grid>
    </Grid>
  );
}
