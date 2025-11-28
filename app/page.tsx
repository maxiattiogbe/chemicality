import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100dvh",
          background: "#0a0a0a",
          color: "#ededed",
          width: "100vw",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "4rem",
            color: "#4169e1",
          }}
        >
          Chemicality
        </h1>
        <p style={{ fontSize: "1.5rem" }}>
          Machine Learning for Molecular Discovery and Design
        </p>
        <div
          style={{
            fontSize: "1.1rem",
            color: "#f5f5f5",
            marginTop: "1rem",
            maxWidth: "80vw",
            textAlign: "center",
          }}
        >
          <p>
            Starting with small molecule drug design targeting antibiotic resistance
          </p>
          <p>
            Aiming to expand to more pathogens and broader applications of molecular design
          </p>
        </div>
      </div>
    </div>
  );
}
