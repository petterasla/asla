const HtmlComponent = () => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

const htmlString = `
<div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style='font-family: Epilogue, "Noto Sans", sans-serif;'>
  <div class="layout-container flex h-full grow flex-col">
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f1f4] px-10 py-3">
      <div class="flex items-center gap-4 text-[#121317]">
        <div class="size-8">
          <div>
            <img src="/asla-engineering-favicon-black.png" alt="Company logo"/>
          </div>
        </div>
        <h2 class="text-[#121317] text-lg font-bold leading-tight tracking-[-0.015em]">Asla Engineering AS</h2>
      </div>
      <div class="flex flex-1 justify-end gap-8">
        <div class="flex items-center gap-9">
          <a class="text-[#121317] text-sm font-medium leading-normal" href="#">Tjenester</a>
          <a class="text-[#121317] text-sm font-medium leading-normal" href="#">Løsninger</a>
          <a class="text-[#121317] text-sm font-medium leading-normal" href="#">Ressurser</a>
          <a class="text-[#121317] text-sm font-medium leading-normal" href="#">Selskap</a>
        </div>
      </div>
    </header>
    <div class="px-40 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="@container">
          <div class="@[480px]:p-4">
            <div
                    class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyZnPc3Qs_a_CSxPopJOsSl8ox2aYLtZKL6yLZ9z4X-6koMEx0vy9AQ6-3SSzySB_j3ZvgcXN71zRHhe4gLBhTo3ahzC-OxSmoL1cMvtaSR-PxrIloEj9HRkQsh-N2gw1ToLRX4fzN80hslCOzBBMhSVS6bVY4FeIZg4dNpoAfGbwnnMDKRiNyrqtXqKsZ1rpVrEW76uYcx90DWG_rpGlU_vK8Y-nYjWpQ9Uv9qeFndmB0cAyLU3pN_9Uhn1wbVadZvjbauWRGsA");'
            >
              <div class="flex flex-col gap-2 text-left">
                <h1
                        class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                >
                  Koble virksomheten din sømløst med API-løsninger
                </h1>
                <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Asla Engineering tilbyr banebrytende API-integrasjon og arkitekturtjenester for å strømlinjeforme IT-prosessene dine og drive innovasjon.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h2 class="text-[#121317] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Våre tjenester</h2>
        <div class="flex flex-col gap-10 px-4 py-10 @container">
          <div class="flex flex-col gap-4">
            <h1
                    class="text-[#121317] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
            >
              Omfattende API-løsninger
            </h1>
            <p class="text-[#121317] text-base font-normal leading-normal max-w-[720px]">
              Vi tilbyr en rekke tjenester for å møte dine spesifikke behov, fra API-design og -utvikling til integrasjon og administrasjon.
            </p>
          </div>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dcdee4] bg-white p-4 flex-col">
              <div class="text-[#121317]" data-icon="PuzzlePiece" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                          d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#121317] text-base font-bold leading-tight">API-design og -utvikling</h2>
                <p class="text-[#666c85] text-sm font-normal leading-normal">Utforming av robuste og skalerbare API-er skreddersydd for dine forretningskrav.</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dcdee4] bg-white p-4 flex-col">
              <div class="text-[#121317]" data-icon="ArrowsLeftRight" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                          d="M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#121317] text-base font-bold leading-tight">API-integrasjon</h2>
                <p class="text-[#666c85] text-sm font-normal leading-normal">Integrering av API-er sømløst for å koble sammen systemene dine og øke effektiviteten.</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dcdee4] bg-white p-4 flex-col">
              <div class="text-[#121317]" data-icon="Gear" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                          d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#121317] text-base font-bold leading-tight">API-administrasjon</h2>
                <p class="text-[#666c85] text-sm font-normal leading-normal">Tilbyr verktøy og ekspertise for å overvåke, sikre og optimalisere API-ene dine.</p>
              </div>
            </div>
          </div>
        </div>
        <h2 class="text-[#121317] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Stolt på av ledende selskaper</h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div class="flex flex-col gap-3">
            <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpbTNZPauQkdILqg3l3pEcOmzeatMNN3UVqXNws6kySAMnd1yaXCvJVDV3DueRUJxT0KdbPS5AgcQxwmZPpJBwqRRangJotbMlkua5P5iV8WLCeY66OG-mYoumwkg5uGPAosFDG4tw-c0RGXSoWVEBaXd4JYu0FWuqctcMYa4DczxTbLNROaPcl7XtpuTxv11XvZRpZRvzd__O5iSqQixySD4Kam3XbZEc8jRaLIIYt3x-87eTXo0CxhqA0h7YIFEg3lH1UjdpZQ");'
            ></div>
          </div>
          <div class="flex flex-col gap-3">
            <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuChC1qZU57UzDJFg6SFrKv46Yocp8wRoPUc9gcsV-wAjgosPG5JezM9-6s-YY3mY1D1AEblG6U3E-SQ6AkiQVPV-pDZbIymd0tN8FoiuZ9Os4yJXhMakLV1w4uVhpW8M3mroii_L5NGkXXNFcTav7FcZujugNQIdyc43EvM1UVJnTAgy9HaT825Cmcb5ET_P4DhN84AM9P2o708IONQGVDaDjW4c9vNTUBtfkag_ocRc0BP92tjEVuBpZZ0Hztb9VADSP7yIrFrlw");'
            ></div>
          </div>
          <div class="flex flex-col gap-3">
            <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGa80oBwg4gTCpgMSHCnMl7JMiGdUoN3Uwa5Po3cyg6sfiQyVzO43uHh-PLnRz79K3BJ58pxoCyrLIPONiXbCGSWR6BtMXmkuUgsNLEu7Fo9-evHlql0vySc815_pS44CJaSqNrffCcKeb--Qsi1OH8fo1gSvqefWKAtFt7Zlyksca5DODL8b6vr4eJuna4C4bpB2VYykaQN_YIBHBZk00t0QC7a0gd5bzB9YkSm57zBIftrxoxJIQ8ke4g5lmHDxyfPhN3337iw");'
            ></div>
          </div>
          <div class="flex flex-col gap-3">
            <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfWIBYB7S07Ra7s23_8Lfr_acKH6KWHCOADZi8KYiIxalpsWX2v1vmF8Pp1YOw_Hk9LeuKEVMwXQTbgeCDMims28k3efg_MXLhmL7ZEZSbe0m8_8JgqZITbuYuG5pgVHgYaTo5ShMjHFvefvWynMuIMfZcCnkXW0amj3VTDo_2JDoxcvuNC7oKe5OsLcnwXx-GLJa3S7po4CBK8d3TszlCEMYwsaH6MR6UBr1DFz5hB3KmtLUPRkau4hllE6Mfbit5T8YpuW0liQ");'
            ></div>
          </div>
        </div>
        <div class="@container">
          <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div class="flex flex-col gap-2 text-center">
              <h1
                      class="text-[#121317] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
              >
                Klar til å transformere virksomheten din?
              </h1>
            </div>
            <div class="flex flex-1 justify-center">
              <div class="flex justify-center">
                <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e9ecfa] text-[#121317] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                >
                  <span class="truncate">Få en gratis konsultasjon</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="flex justify-center">
      <div class="flex max-w-[960px] flex-1 flex-col">
        <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a class="text-[#666c85] text-base font-normal leading-normal min-w-40" href="#">Personvernregler</a>
            <a class="text-[#666c85] text-base font-normal leading-normal min-w-40" href="#">Vilkår for bruk</a>
            <a class="text-[#666c85] text-base font-normal leading-normal min-w-40" href="#">Kontakt oss</a>
          </div>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="#">
              <div class="text-[#666c85]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                          d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                  ></path>
                </svg>
              </div>
            </a>
            <a href="#">
              <div class="text-[#666c85]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                          d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <p class="text-[#666c85] text-base font-normal leading-normal">© 2025 Asla Engineering. Alle rettigheter forbeholdt.</p>
        </footer>
      </div>
    </footer>
  </div>
</div>
`;

export default HtmlComponent;