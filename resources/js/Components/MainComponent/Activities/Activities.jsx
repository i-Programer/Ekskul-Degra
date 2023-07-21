import React from "react";
import Collapsible from "react-collapsible";

const Activities = () => {
    return (
        <>
            <div className="flex flex-row justify-center items-center px-5 mb-5 ">
                <span className="text-4xl font-bold text-slate-400">
                    Activies
                </span>
            </div>

            <div className="flex justify-center items-center sm:px-0 px-3 mb-10">
                <div className="flex flex-row justify-between items-center gap-x-3 gap-y-3">
                    <div className="flex flex-col justify-ceter items-center gap-x-2 gap-y-4 ">
                        <div className="p-3 rounded-md bg-white flex flex-col justify-center items-start sm:w-2/3">
                            <Collapsible
                                trigger={
                                    <button className="w-full">
                                        <span className="text-slate-600 font-bold text-lg">
                                            Apa yg akan kamu pelajari
                                        </span>
                                    </button>
                                }
                            >
                                <div className="p-4 bg-gray-100">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>
                                            Prinsip-prinsip Desain Grafis: Anda
                                            akan mempelajari konsep-konsep dasar
                                            desain seperti keseimbangan,
                                            proporsi, ritme, kesatuan, dan
                                            lain-lain. Prinsip-prinsip ini
                                            membantu dalam menciptakan karya
                                            yang estetis dan mudah dipahami.
                                        </li>
                                        <li>
                                            Teori Warna: Anda akan belajar
                                            tentang roda warna, harmoni warna,
                                            kontras, dan bagaimana menggunakan
                                            warna secara efektif dalam desain
                                            grafis.
                                        </li>
                                        <li>
                                            Tipografi: Pelajari tentang beragam
                                            jenis huruf (font), pengaturan
                                            tipografi, pemilihan font yang
                                            sesuai untuk suatu proyek, dan
                                            bagaimana menata teks agar mudah
                                            dibaca dan menarik.
                                        </li>
                                    </ul>
                                </div>
                            </Collapsible>
                        </div>
                        <div className="p-3 rounded-md bg-white flex flex-col justify-center items-start sm:w-2/3">
                            <Collapsible
                                trigger={
                                    <button className="w-full">
                                        <span className="text-slate-600 font-bold text-lg">
                                            Apa yg akan kamu lakukan
                                        </span>
                                    </button>
                                }
                            >
                                <div className="p-4 bg-gray-100">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>
                                            Latihan Menggunakan Perangkat Lunak
                                            Desain: Peserta akan diajarkan cara
                                            menggunakan perangkat lunak desain
                                            seperti Adobe Photoshop,
                                            Illustrator, InDesign, atau
                                            perangkat lunak desain lainnya.
                                            Mereka akan berlatih membuat dan
                                            mengedit gambar, ilustrasi, dan tata
                                            letak desain.
                                        </li>
                                        <li>
                                            Proyek Desain: Peserta akan diberi
                                            tugas untuk mengerjakan
                                            proyek-proyek desain, seperti
                                            pembuatan poster, brosur, logo,
                                            desain web, atau desain untuk media
                                            sosial. Proyek-proyek ini akan
                                            membantu mereka mengasah
                                            keterampilan praktis dan kreativitas
                                            mereka.
                                        </li>
                                        <li>
                                            Pelatihan Kreativitas: Peserta
                                            mungkin juga akan dilatih untuk
                                            mengembangkan kreativitas mereka,
                                            misalnya melalui latihan
                                            brainstorming, eksperimen desain,
                                            atau kegiatan kreatif lainnya.
                                        </li>
                                    </ul>
                                </div>
                            </Collapsible>
                        </div>
                        <div className="p-3 rounded-md bg-white flex flex-col justify-center items-start sm:w-2/3">
                            <Collapsible
                                trigger={
                                    <button className="w-full">
                                        <span className="text-slate-600 font-bold text-lg">
                                            Apa yg akan kamu dapatkan
                                        </span>
                                    </button>
                                }
                            >
                                <div className="p-4 bg-gray-100">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>
                                            Keterampilan Desain Grafis: Peserta
                                            akan mempelajari keterampilan teknis
                                            dalam menggunakan perangkat lunak
                                            desain seperti Adobe Photoshop,
                                            Illustrator, InDesign, atau alat
                                            desain lainnya. Mereka juga akan
                                            menguasai konsep desain grafis,
                                            tipografi, ilustrasi, dan tata letak
                                            yang diperlukan untuk menciptakan
                                            karya-karya desain yang menarik dan
                                            profesional.
                                        </li>
                                        <li>
                                            Kreativitas dan Imajinasi: Ekskul
                                            desain grafis merangsang kreativitas
                                            peserta. Dengan berbagai proyek dan
                                            tantangan desain yang diberikan,
                                            mereka akan belajar berpikir
                                            kreatif, berimajinasi, dan mencari
                                            solusi inovatif untuk setiap tugas.
                                        </li>
                                        <li>
                                            Kritik dan Umpan Balik: Dalam sesi
                                            kritik dan umpan balik, peserta akan
                                            belajar menerima saran dan kritik
                                            konstruktif terhadap karya mereka.
                                            Hal ini membantu mereka memahami
                                            aspek-aspek yang perlu diperbaiki
                                            dan meningkatkan kualitas desain
                                            mereka.
                                        </li>
                                    </ul>
                                </div>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Activities;
