import { Resume } from "@/lib/reducer";
import { getLayout } from "@/templates/get-resume-layout";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FiDownload } from "react-icons/fi";

type Props = { resume: Resume; children: string };

export const DownloadResume = ({ resume, children }: Props) => {
  return (
    <PDFDownloadLink
      fileName={`${resume.name}.pdf`}
      document={getLayout({ ...resume }) as React.ReactElement}
      className="bg-green-field text-white text-sm py-1 px-2 rounded flex items-center gap-2"
    >
      <FiDownload />
      Download
    </PDFDownloadLink>
  );
};
