"use client";
import { TypeSizeButton, TypeVariantButton } from "@/@types/ButtonTypes";
import { TypeColorLabel, TypeSizeLabel } from "@/@types/TitleTypes";
import ButtonCustom from "@/components/ButtonCustom";
import Title from "@/components/Title/Title";
import { Box, Grid } from "@mui/material";
import { handleDownload } from "./handlers/HeaderHandlers";

export default function Header() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} sx={{ border: "2px solid green" }}>
        <Title
          title={"Hello! I'm Pamela."}
          typeSizeLabel={TypeSizeLabel.LARGE}
          typeColorLabel={TypeColorLabel.PRIMARY}
          isBold
        />
        <Title
          title={"I'm Front End Developer"}
          typeSizeLabel={TypeSizeLabel.LARGE}
          typeColorLabel={TypeColorLabel.PRIMARY}
          isBold
        />

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
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} sx={{ border: "2px solid green" }}>
        <Box
          component="img"
          sx={{
            width: "60%",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
          }}
          alt="Imagem de exemplo"
          src="https://media.licdn.com/dms/image/v2/D4D03AQF5MkvYU1_g7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721072975897?e=1742428800&v=beta&t=g9v5AHQ4H3D_hMv96hiuiUrjEnNFW9ZNuAz6FUCgb3o" // URL da imagem
        />
      </Grid>
    </Grid>
  );
}
