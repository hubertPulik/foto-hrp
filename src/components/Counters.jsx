export default function Counters() {
  return (
    <div>
        <div id="_liczniki">
            <section className="pelna_szerokosc tlo_z_obrazem" id="tlo_z_obrazem_01">
                <div className="separator_tlo_gora"><img className="separator_gora"
                    src="https://foto.hrp84.pl/zasoby/svg/separator_tlo.svg" alt="białe tło"/>
                </div>
                <div className="col_100 separator_170 re"></div>
                <div className="col_100 kontener_flex">
                    <div className="col_15 responsywny_ukryty"></div>
                    <div className="col_70 kontener_flex responsywny_zostaje">
                    <div className="col_20">
                        <p className="licznik_gora" id="">76348</p>
                        <p className="licznik_dol">Uchwyconych kadrów</p>
                    </div>
                    <div className="col_20">
                        <p className="licznik_gora" id="">131</p>
                        <p className="licznik_dol">Zadowolonych klientów</p>
                    </div>
                    <div className="col_20">
                        <p className="licznik_gora" id="">150</p>
                        <p className="licznik_dol">h/m-c pracy w Photoshopie</p>
                    </div>
                    <div className="col_20">
                        <p className="licznik_gora" id="">10</p>
                        <p className="licznik_dol">kg obiektywów</p>
                    </div>
                    <div className="col_20">
                        <p className="licznik_gora" id="">323313</p>
                        <p className="licznik_dol">Kroków w trakcie zleceń</p>
                    </div>
                    </div>
                    <div className="col_15 responsywny_ukryty"></div>
                </div>
                <div className="col_100 separator_170"></div>
                <div className="separator_tlo_gora"><img className="separator_dol" src="https://foto.hrp84.pl/zasoby/svg/separator_tlo.svg"
                    alt="białe tło"/>
                </div>
            </section>
        </div>
    </div>
  )
}