import { useState } from "react";
import api from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  async function enviar(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", { email, senha });
      console.log(data)
      localStorage.setItem("token", data.token);
      setMsg("Login realizado!");
    } catch {
      setMsg("Erro ao fazer login.");
    }
  }

  return (
    <div className="container mt-4" style={{maxWidth: "400px"}}>
      <h3>Login</h3>

      <form onSubmit={enviar}>
        <input className="form-control mb-2" placeholder="E-mail"
          value={email} onChange={e => setEmail(e.target.value)} />

        <input className="form-control mb-2" placeholder="Senha" type="password"
          value={senha} onChange={e => setSenha(e.target.value)} />

        <button className="btn btn-primary w-100">Entrar</button>
      </form>

      {msg && <div className="alert alert-info mt-3">{msg}</div>}
    </div>
  );
}
