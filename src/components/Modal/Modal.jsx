import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./Modal.css";

const Modal = ({ show, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = (data) => {
    setIsSending(true);
    const serviceID = "service_ioxs5fm";
    const templateID = "template_fb7087h";
    const userID = "Q0I5ztfdHcyPZVMuN";

    const emailData = {
      from_name: data.name,
      message: `
        Email: ${data.email}
        Broj telefona: ${data.phoneNumber}
        Program: ${data.program}
        Ciljevi: ${data.about}
      `,
    };

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then(
        (result) => {
          console.log(result.text);
          reset();
          toast.success("Vaša poruka je uspešno poslata!", {
            position: "top-center",
            duration: 3000,
            style: {
              border: "1px solid var(--orange)",
              padding: "16px",
              color: "var(--orange)",
            },
            iconTheme: {
              primary: "var(--orange)",
              secondary: "white",
            },
            onClose: onClose,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Došlo je do greške prilikom slanja poruke.", {
            position: "top-center",
            duration: 3000,
            style: {
              border: "1px solid #f44336",
              padding: "16px",
              color: "#f44336",
            },
            iconTheme: {
              primary: "#f44336",
              secondary: "#FFFAEE",
            },
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className === "modal show") {
        onClose();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal show">
      <Toaster />
      <div className="modal-content">
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>Prijavi se</span>
        <h4>
          Popusti su dostupni za studente, zaposlene u hitnoj službi, policiji i
          vatrogasnoj službi. Svaki paket je snižen za 10 eura.
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Vaše ime <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="Ime i prezime"
            {...register("name")}
            required
          />
          <label>
            Vaša email adresa <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            placeholder="jon.doe@gmail.com"
            {...register("email")}
            required
          />
          <label>
            Vaš broj telefona <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="tel"
            placeholder="+38166772884"
            {...register("phoneNumber")}
            required
          />
          <label>
            Izaberi program <span style={{ color: "red" }}>*</span>
          </label>
          <select {...register("program")} required>
            <option value="Osnovni">Osnovni</option>
            <option value="Profesionalni">Profesionalni</option>
            <option value="Počni od nule">Počni od nule</option>
            <option value="Ženski program">Ženski program</option>
            <option value="Program za decu">Program za decu</option>
            <option value="Školica sporta">Školica sporta</option>
            <option value="Privatni treninzi">Privatni treninzi</option>
          </select>
          <label>Koje ciljeve želiš da postigneš sa treningom?</label>
          <textarea
            placeholder="Molimo te uključi sve relevantne informacije o sebi i svojim ciljevima."
            {...register("about")}
            required
          ></textarea>
          <button type="submit" disabled={isSending}>
            {isSending ? "Slanje..." : "Pošalji"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
