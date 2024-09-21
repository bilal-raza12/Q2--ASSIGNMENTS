import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="description second">
        <p>
          Hey! I am{" "}
          <strong>
            <span>Muhammad Bilal Raza,</span>{" "}
          </strong>{" "}
          I am a Nextjs Developer and a passionate and dedicated student of
          GIAIC
        </p>
      </div>
      <div className="profile-pic second">
        <img src="/images/profile-pic.png" alt="" />
      </div>
    </div>
  );
}
