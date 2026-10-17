const redes = [
  'X @SENACOMUNICA',
  'Instagram @SENACOMUNICA',
  'YouTube @SENATV',
  'LinkedIn @SENA',
  'Facebook @SENA',
  'TikTok @senacolombia',
]

const enlaces = [
  'Directorio SENA',
  'Chat en línea',
  'Notificaciones judiciales',
  'Términos y condiciones del portal web',
  'Derechos de autor y/o autorización de uso sobre contenidos',
  'Política de Tratamiento para Protección de Datos Personales',
  'Mapa del sitio',
  'Política de seguridad y privacidad de la información',
]

export default function Footer() {
  return (
    <footer className="relative">
      <div className="bg-white h-[380px] absolute inset-x-0 top-0" />
      <div className="bg-azul-textura absolute inset-x-0 top-[380px] bottom-[38px]" />

      <div className="relative px-4 pt-[60px] pb-[118px]">
        <div className="max-w-[1118px] mx-auto bg-white rounded-md shadow-[0_0_12px_rgba(0,0,0,0.18)] px-6 lg:px-[26px] pt-8 pb-5 text-navy">
          <div className="flex justify-between gap-6">
            <div>
              <img
                src="/img/footer-logos.png"
                alt="SENA - Observatorio Laboral y Ocupacional"
                className="h-[72px] w-auto -ml-2"
              />
              <h3 className="mt-3 font-bold text-[1.3rem]">Servicio Nacional de Aprendizaje SENA</h3>
              <p className="text-[1.08rem] leading-[1.6]">
                Dirección: Calle 57 No. 8 - 69 Bogotá D.C. (Cundinamarca), Colombia.
                <br />
                El SENA brinda a la ciudadanía, atención presencial en las 33 Regionales y 118
                Centros de Formación
              </p>
              <a href="#" className="text-[0.9rem] underline">
                Conozca aquí los puntos de atención
              </a>
            </div>
            <img
              src="/img/logo-trabajo.png"
              alt="Ministerio del Trabajo"
              className="hidden md:block w-[118px] h-auto self-start mt-[72px] mr-[40px]"
            />
          </div>

          <dl className="mt-4 space-y-3 text-[1.08rem] leading-[1.35]">
            <div>
              <dt className="font-bold">Línea de WhatsApp:</dt>
              <dd>3112545028</dd>
            </div>
            <div>
              <dt className="font-bold">Líneas de atención al ciudadanos, empresarios y línea PQRS:</dt>
              <dd>Bogotá +(57) 601 736 60 60 - Línea gratuita y resto del país 018000 910270</dd>
            </div>
            <div>
              <dt className="font-bold">Mesa de ayuda:</dt>
              <dd>
                PBX (57 1) 5461500 IP: 13037
                <br />
                soporteolo@sena.edu.co
              </dd>
            </div>
            <div>
              <dt className="font-bold">Horario de atención:</dt>
              <dd>Lunes a viernes de 8:00 am a 5:30 pm</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <img
              src="/img/footer-redes.png"
              alt={redes.join(' ')}
              className="w-[737px] max-w-full h-auto"
            />
            <img
              src="/img/certificaciones.png"
              alt="Certificaciones ICONTEC e IQNET"
              className="h-[50px] w-auto"
            />
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-9 gap-y-3 font-bold text-[1rem]">
            {enlaces.map((e) => (
              <li key={e}>
                <a href="#" className="hover:underline">
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative bg-gov h-[38px] flex items-center">
        <div className="max-w-[1118px] w-full mx-auto px-4 lg:px-0">
          <img src="/img/gov-co-footer.png" alt="gov.co" className="h-[30px] w-auto" />
        </div>
      </div>
    </footer>
  )
}
