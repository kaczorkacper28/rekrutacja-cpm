const webhookURL = "https://discord.com/api/webhooks/1488312579926397019/mmyEXJox3Y3_CELN8J8N9MgsNVBz30YZLqhxFufgM04FJLY1gL_jzO15rBlVd_zR_kMC;

document.getElementById("rekrutacjaForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  let content = "**📋 NOWA REKRUTACJA - Car Parking Multiplayer**\n\n";

  for (let [key, value] of formData.entries()) {
    content += `**${key.charAt(0).toUpperCase() + key.slice(1)}**: ${value}\n`;
  }

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content })
  });

  alert("✅ Zgłoszenie wysłane!");
  e.target.reset();
});
