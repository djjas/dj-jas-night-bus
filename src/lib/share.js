export async function shareTheRide() {
  const shareData = {
    title: "DJ JAS — The Night Bus",
    text: "A one-way ride through Bollywood. Board the bus.",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return { shared: true, copied: false };
    } catch {
      return { shared: false, copied: false };
    }
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    return { shared: false, copied: true };
  } catch {
    return { shared: false, copied: false };
  }
}
