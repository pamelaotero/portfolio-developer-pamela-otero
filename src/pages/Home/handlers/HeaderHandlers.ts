"use client";
export const handleDownload = () => {
  const pdfUrl = "/pdfs/cv_frontend_pamela_otero.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CV FRONT END PAMELA OTERO.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
