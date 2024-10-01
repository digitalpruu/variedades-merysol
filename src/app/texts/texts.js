const title = "Variedades Merysol";
const email = "merisol.gomez33@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información sobre la mercancía para el hogar y ropa deportiva. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3209142666";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Variedades Merysol se especializa en la compra y venta de mercancía para el hogar, ofreciendo una amplia gama de productos como sábanas, toallas, edredones, cobijas térmicas y de peluche.",
        description2: "También contamos con ropa deportiva, incluyendo joggers, camisetas, leggings y sudaderas, todo diseñado para brindar confort y estilo a nuestros clientes.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Todo para el hogar",
            p2: "Comodidad y estilo en un solo lugar",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/MerysolGomezMelo", // Facebook proporcionado.
        instagram: "https://www.instagram.com/MerysolGomezMelo", // Instagram proporcionado.
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
