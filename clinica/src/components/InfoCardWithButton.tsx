import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function InfoCardWithButton({
  imageSrc,
  title,
  titleCard,
  description,
  imageCard,
  additionalContent,
}: {
  imageSrc: string;
  title: string;
  titleCard: string;
  description: string;
  imageCard: string;
  additionalContent?: JSX.Element | JSX.Element[];
}): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <div
        className="
        relative 
        w-full h-full rounded-[10px] 
        shadow-[16px_16px_20px_#0000008c] 
        overflow-hidden
        before:absolute 
        before:top-[-50%]
        before:right-[-50%] before:bottom-[-50%] 
        before:left-[-50%] 
        hover:before:bg-[conic-gradient(transparent,transparent,#1F2B6C)]
        before:animate-spin-slow
        group
      "
      >
        <div
          className="
            absolute inset-1
            flex justify-center items-center
            hover:top-[10px] hover:right-[10px] hover:bottom-[10px] hover:left-[10px]
            rounded-[10px] px-4 bg-black
            shadow-[20px_20px_20px_#0000008c_inset]
            flex-col
            gap-4
          "
        >
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-60"
          />
          <h2 className="relative flex justify-center text-white text-2xl w-48 font-bold py-2 rounded-md shadow-lg">
            {title}
          </h2>

          <Button
            label="Saiba Mais"
            icon="pi pi-external-link"
            onClick={() => setVisible(true)}
            style={{ backgroundColor: "#1F2B6C" }}
          />
          <Dialog
            header="Serviços"
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
          >
            <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-950 p-8 max-w-3xl mx-auto rounded-xl shadow-2xl  ">
              <h1 className="text-4xl font-extrabold text-white mb-6 flex justify-center p-4 items-center tracking-wide">
                {titleCard}
              </h1>
              <p className="text-white text-lg leading-relaxed bg-black bg-opacity-30 p-4 mx-auto rounded-lg shadow-md flex justify-center items-center gap-8 max-lg:flex-col">
                {description}
                <img
                  src={imageCard}
                  alt={title}
                  className="object-cover rounded-lg border w-64 h-64 mx-auto"
                />
              </p>
            </div>
            <div>{additionalContent}</div>
          </Dialog>
        </div>
      </div>
    </>
  );
}
