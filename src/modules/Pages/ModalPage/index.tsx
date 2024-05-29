import { IMovie } from "../../../types/Movies";

type Props = {
  movieSelected: IMovie | undefined;
};

export const ModalPage = ({ movieSelected }: Props) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "180px 0",
      }}
    >
      <iframe
        width="1200"
        height="677"
        src={movieSelected?.link}
        title="Introduction To WiseGPT"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
