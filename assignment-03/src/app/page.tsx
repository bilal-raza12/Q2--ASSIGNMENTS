import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div className="main">
        <div className="description second">
          <p>
            Hey! I am
            <strong>
              <span> Muhammad Bilal Raza,</span>
            </strong>
             I am a Web Developer and a passionate and dedicated student of GIAIC
          </p>
        </div>
        <div className="profile-pic second">
          <img src="/images/profile-pic.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
