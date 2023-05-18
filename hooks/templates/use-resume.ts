"use client";
import { usePDF } from "@/hooks/use-pdf";
import { useAsync } from "react-use";

//react-pdf__Page__canvas
//

const page = {
  width: 210,
  height: 400,
  colors: {
    black: "#222222",
    gray: "D9D9D9",
    blue: "#E4F6FB",
  },
};

export function useResume(props) {
  const img = new Image();
  img.src = "pedro_pic.jpg";
  const doc = usePDF();

  switch (props.template) {
    case "professional":
      doc.setFillColor(page.colors.blue);
      doc.rect(0, 0, page.width, page.height / 7, "F");
      doc.setFillColor(page.colors.gray);
      doc.context2d.beginPath();
      doc.context2d.arc(22, 22, 10, 0, 2 * Math.PI, true);
      doc.context2d.closePath();
      doc.context2d.fill();
      doc.context2d.clip();

      doc.addImage(img, "png", 8, 12, 28, 28);
      doc.setTextColor(page.colors.black);
      doc.text(props.name || "professional", 80, 50);
      break;
    default:
      doc.text("default", 50, 50);
  }

  const render = useAsync(async () => {
    const url = doc.output("bloburl");
    return url;
  }, [props]);

  console.log(render.value);

  return render;
}
