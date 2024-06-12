export default function useFooter() {
  const paymentMetodUrl = [
    "public/static/alelo.svg",
    "public/static/amex.svg",
    "public/static/dinners.svg",
    "public/static/elo.svg",
    "public/static/ifood.svg",
    "public/static/mastercard.svg",
    "public/static/pix.svg",
    "public/static/sodexo.svg",
    "public/static/ticket.svg",
    "public/static/visa.svg",
  ];
  const footerCreditImg = [
    "public/econverse.svg",
    "public/logoVTEXCompleted.svg"
  ]

  return {
    paymentMetodUrl,
    footerCreditImg
  }
}
