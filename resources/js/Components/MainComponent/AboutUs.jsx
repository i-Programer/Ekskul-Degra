import React from "react";

const AboutUs = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mb-10">
                <div className="flex flex-row justify-between items-center sm:px-5 px-2 mb-5 ">
                    <span className="sm:text-5xl text-4xl font-bold text-slate-400">
                        About Degra
                    </span>
                </div>

                <div className="flex justify-center items-center sm:px-[20vw] px-[5vw]">
                    <p className="text-slate-400 text-lg text-center">
                        Ekstrakurikuler Desain Grafis adalah salah satu kegiatan
                        di sekolah yang bertujuan untuk melatih siswa dalam
                        mengembangkan kreativitas dan keterampilan desain
                        mereka. Dalam kegiatan ini, para siswa diajarkan untuk
                        menciptakan dan mengkombinasikan berbagai elemen desain
                        seperti simbol, gambar, dan teks untuk menghasilkan
                        representasi visual yang menyampaikan gagasan dan pesan
                        secara efektif.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
