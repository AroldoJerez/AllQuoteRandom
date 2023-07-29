"use client";
import { useEffect, useState } from "react";
import { colors } from "@/app/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";

const Frase = () => {
  const [colorClass, setColorClass] = useState("bg-emerald-700");
  const [textcolorClass, setTextColorClass] = useState("text-emerald-700");
  const [objeto, setObjeto] = useState({ quote: "", autor: "" });
  const [loaded, setLoaded] = useState(false);

  const getRandomColorClass = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const HandleChangeColor = () => {
    const colores = getRandomColorClass();
    setColorClass(colores.bg);
    setTextColorClass(colores.text);
  };

  //llamada a la api
  const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";

  const getDatos = async () => {
    try {
      const respuesta = await axios.get(url, {
        headers: {
          "X-Api-Key": "A7D3J240S0FbIf3+LiOmDw==kUpF98AU2mE4xLVK",
        },
      });
      if (respuesta.status === 200) {
        setObjeto({
          quote: respuesta.data[0].quote,
          autor: respuesta.data[0].author,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    setLoaded(false);
    getDatos();
  }, [colorClass]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${colorClass}`}
    >
      <div
        id="quote-box"
        className="bg-white rounded space-y-4 p-6 min-h-max w-full max-w-xl flex flex-col justify-between"
      >
        {loaded ? (
          <p id="text" className={`text-2xl	${textcolorClass}`}>
            {objeto.quote}
          </p>
        ) : (
          <div className="flex flex-row justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-8 border-solid border-sky-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-8 border-solid border-rose-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-8 border-solid border-emerald-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-8 border-solid border-yellow-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-8 border-solid border-gray-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-8 border-solid border-purple-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
        <p id="author" className={`flex justify-end ${textcolorClass}`}>
          {objeto.autor}
        </p>
        <div className="flex justify-between items-end">
          <div className="space-x-2 ">
            <a
              className={`text-white p-2 rounded ${colorClass} hover:cursor-pointer hover:opacity-90`}
              id="Twitter"
              title="Comparte en twitter"
              target="_top"
            >
              <TwitterIcon />
            </a>
            <a
              className={`text-white p-2 rounded ${colorClass}	hover:cursor-pointer hover:opacity-90`}
              id="Facebook"
              title="Comparte con facebook"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </div>
          <a
            className={`text-white p-2 px-8 rounded ${colorClass}	hover:cursor-pointer hover:opacity-90`}
            onClick={HandleChangeColor}
          >
            NEXT
          </a>
        </div>
      </div>
      <a
        href="https://github.com/AroldoJerez/Parafrasear"
        target="_blank"
        className="text-1xl text-white mt-4 opacity-30 hover:cursor-pointer hover:opacity-100"
      >
        Parafrasear v0.1 - Aroldo
      </a>
    </div>
  );
};

export default Frase;
