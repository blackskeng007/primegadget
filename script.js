(function () {
  "use strict";
  const IMG = {'hero-image.jpg':'images/hero-image.jpg','logo-mark.png':'images/logo-mark.png','p-watch-black.png':'images/p-watch-black.png','p-watch-green.png':'images/p-watch-green.png','p-watch-pink.png':'images/p-watch-pink.png','p-buds-white.png':'images/p-buds-white.png','p-buds-beige.png':'images/p-buds-beige.png','p-buds-orange.png':'images/p-buds-orange.png','oraimo-traveler-15-20000.jpg':'images/oraimo-traveler-15-20000.jpg','rexi-rmf40-40000.jpg':'images/rexi-rmf40-40000.jpg','rexi-rmf50-50000.jpg':'images/rexi-rmf50-50000.jpg','itel-budsfit-5.jpg':'images/itel-budsfit-5.jpg','buds-5-anc.jpg':'images/buds-5-anc.jpg','oraimo-spacebuds-neo-plus.jpg':'images/oraimo-spacebuds-neo-plus.jpg','oraimo-spacebuds-lite.jpg':'images/oraimo-spacebuds-lite.jpg','oraimo-spacebuds-neo.jpg':'images/oraimo-spacebuds-neo.jpg','oraimo-spacebuds-otw630.jpg':'images/oraimo-spacebuds-otw630.jpg','oraimo-boompop-lite.jpg':'images/oraimo-boompop-lite.jpg','conch-oep-e10-earphone.jpg':'images/conch-oep-e10-earphone.jpg','itel-dual-usb-charger.jpg':'images/itel-dual-usb-charger.jpg','oraimo-anifast-usbc-charger.jpg':'images/oraimo-anifast-usbc-charger.jpg','oraimo-powerflow-b11-10000.jpg':'images/oraimo-powerflow-b11-10000.jpg','oraimo-openarc-opn675.jpg':'images/oraimo-openarc-opn675.jpg','oraimo-lite-micro-usb-cable.jpg':'images/oraimo-lite-micro-usb-cable.jpg','oraimo-watch-5-max.jpg':'images/oraimo-watch-5-max.jpg','oraimo-lightning-cable-1m.jpg':'images/oraimo-lightning-cable-1m.jpg','oraimo-lite-type-c-cable.jpg':'images/oraimo-lite-type-c-cable.jpg','oraimo-powercube-10-sleek.jpg':'images/oraimo-powercube-10-sleek.jpg','oraimo-opensnap-air.jpg':'images/oraimo-opensnap-air.jpg','oraimo-watch-4-nano.jpg':'images/oraimo-watch-4-nano.jpg','oraimo-powercube-61.jpg':'images/oraimo-powercube-61.jpg','oraimo-watch-2r.jpg':'images/oraimo-watch-2r.jpg','oraimo-fast-charge-lightning-cable.jpg':'images/oraimo-fast-charge-lightning-cable.jpg','oraimo-watch-nova-2.jpg':'images/oraimo-watch-nova-2.jpg','oraimo-watch-6.jpg':'images/oraimo-watch-6.jpg','oraimo-powerjet-501-power-bank-50-000mah-85w.jpg':'images/oraimo-powerjet-501-power-bank-50-000mah-85w.jpg','rexi-30000mah-power-bank-22-5w.jpg':'images/rexi-30000mah-power-bank-22-5w.jpg','tws-wireless-earbuds.jpg':'images/tws-wireless-earbuds.jpg','itel-chargereasy-nano-20w-dual-port-charger-208u.jpg':'images/itel-chargereasy-nano-20w-dual-port-charger-208u.jpg','oraimo-traveler-link-27-power-bank-27-000mah-12w.jpg':'images/oraimo-traveler-link-27-power-bank-27-000mah-12w.jpg','itel-power-go-portable-power-station-100-000mah-320wh.jpg':'images/itel-power-go-portable-power-station-100-000mah-320wh.jpg','itel-power-go-pro-portable-power-station-100-000mah-320wh.jpg':'images/itel-power-go-pro-portable-power-station-100-000mah-320wh.jpg','itel-2-1a-charging-cord-type-c-iphone-android.jpg':'images/itel-2-1a-charging-cord-type-c-iphone-android.jpg','itel-2-4a-charging-cable-micro-usb-type-c-iphone.jpg':'images/itel-2-4a-charging-cable-micro-usb-type-c-iphone.jpg','itel-m1-multifunctional-juice-blender.jpg':'images/itel-m1-multifunctional-juice-blender.jpg','itel-16-inch-ac-dc-solar-rechargeable-fan.jpg':'images/itel-16-inch-ac-dc-solar-rechargeable-fan.jpg','itel-smart-trimmer-3-in-1-kit.jpg':'images/itel-smart-trimmer-3-in-1-kit.jpg','itel-smart-watch-o43.jpg':'images/itel-smart-watch-o43.jpg','itel-classic-4-hair-clipper.jpg':'images/itel-classic-4-hair-clipper.jpg','itel-smart-watch-fit-o20-ultra.jpg':'images/itel-smart-watch-fit-o20-ultra.jpg','itel-smart-watch-apex-n10.jpg':'images/itel-smart-watch-apex-n10.jpg','itel-extension-box.jpg':'images/itel-extension-box.jpg','itel-k24-pro-wired-earphones.jpg':'images/itel-k24-pro-wired-earphones.jpg','itel-smart-watch-fit-o23-plus.jpg':'images/itel-smart-watch-fit-o23-plus.jpg','itel-buds-ace-new-wireless-earbuds.jpg':'images/itel-buds-ace-new-wireless-earbuds.jpg','itel-budsneo-3-wireless-earbuds.jpg':'images/itel-budsneo-3-wireless-earbuds.jpg','itel-buds-air-5e-true-wireless-earbuds.jpg':'images/itel-buds-air-5e-true-wireless-earbuds.jpg','itel-buds-go-true-wireless-earbuds.jpg':'images/itel-buds-go-true-wireless-earbuds.jpg','itel-10-000mah-power-bank-20w-fast-charging.jpg':'images/itel-10-000mah-power-bank-20w-fast-charging.jpg','itel-20-000mah-power-bank-charger-bundle.jpg':'images/itel-20-000mah-power-bank-charger-bundle.jpg','itel-40-000mah-power-bank-22-5w-fast-charging.jpg':'images/itel-40-000mah-power-bank-22-5w-fast-charging.jpg','itel-30-000mah-power-bank-22-5w-fast-charging.jpg':'images/itel-30-000mah-power-bank-22-5w-fast-charging.jpg','itel-power-turbo-60-000mah-power-bank-65w.jpg':'images/itel-power-turbo-60-000mah-power-bank-65w.jpg','itel-powereasy-1-magsnap-10c-magnetic-power-bank-10-000mah.jpg':'images/itel-powereasy-1-magsnap-10c-magnetic-power-bank-10-000mah.jpg','itel-star-200-power-bank-20-000mah.jpg':'images/itel-star-200-power-bank-20-000mah.jpg','p9-wireless-bluetooth-headphones.jpg':'images/p9-wireless-bluetooth-headphones.jpg','jbl-tune-510bt-wireless-on-ear-headphones.jpg':'images/jbl-tune-510bt-wireless-on-ear-headphones.jpg','itel-chargerflow-i-65w-triple-port-gan-charger.jpg':'images/itel-chargerflow-i-65w-triple-port-gan-charger.jpg','itel-powerpulse-i-turbo-27-000mah-power-bank-65w.jpg':'images/itel-powerpulse-i-turbo-27-000mah-power-bank-65w.jpg','itel-electric-kettle-1s.jpg':'images/itel-electric-kettle-1s.jpg','itel-hair-clipper-classic-2-pro.jpg':'images/itel-hair-clipper-classic-2-pro.jpg','oraimo-spacebox-pro-bluetooth-speaker.jpg':'images/oraimo-spacebox-pro-bluetooth-speaker.jpg','bose-quietcomfort-ultra-headphones.jpg':'images/bose-quietcomfort-ultra-headphones.jpg','oraimo-necklace-pro-neckband-earphones-oeb-e80d.jpg':'images/oraimo-necklace-pro-neckband-earphones-oeb-e80d.jpg','oraimo-lite-type-c-wired-earphones.jpg':'images/oraimo-lite-type-c-wired-earphones.jpg','oraimo-powergan-351-35w-gan-charger-ocw-5351ucc.jpg':'images/oraimo-powergan-351-35w-gan-charger-ocw-5351ucc.jpg','oraimo-powergan-251-25w-gan-charger-ocw-5251ucc.jpg':'images/oraimo-powergan-251-25w-gan-charger-ocw-5251ucc.jpg','infinix-33w-gan-fast-charger.jpg':'images/infinix-33w-gan-fast-charger.jpg','samsung-super-fast-charging-pd-charger.jpg':'images/samsung-super-fast-charging-pd-charger.jpg','usb-c-to-usb-c-charge-cable-1m-woven.jpg':'images/usb-c-to-usb-c-charge-cable-1m-woven.jpg','usb-c-to-lightning-cable-1m.jpg':'images/usb-c-to-lightning-cable-1m.jpg','oraimo-smartclipper-2c-hair-clipper-opc-cl30c.jpg':'images/oraimo-smartclipper-2c-hair-clipper-opc-cl30c.jpg','oraimo-smartclipper-2-cordless-hair-clipper-opc-cl30.jpg':'images/oraimo-smartclipper-2-cordless-hair-clipper-opc-cl30.jpg','oraimo-easycut-hair-clipper-ocl-230.jpg':'images/oraimo-easycut-hair-clipper-ocl-230.jpg','oraimo-smart-trimmer-opc-tr12.jpg':'images/oraimo-smart-trimmer-opc-tr12.jpg','itel-solar-light-l1.jpg':'images/itel-solar-light-l1.jpg','rugged-ring-stand-phone-case.jpg':'images/rugged-ring-stand-phone-case.jpg','yazmak-magsafe-phone-case-samsung-galaxy-s-ultra.jpg':'images/yazmak-magsafe-phone-case-samsung-galaxy-s-ultra.jpg','leather-protective-case.jpg':'images/leather-protective-case.jpg'};

  setTimeout(function () {
    var i = document.getElementById("intro");
    if (i) { i.classList.add("is-done"); setTimeout(function(){ if (i.parentNode) i.remove(); }, 800); }
    document.body.style.overflow = "";
    [].forEach.call(document.querySelectorAll(".reveal"), function (el) { el.classList.add("in"); });
  }, 5000);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const featuredNames = [
    "itel Smart Watch Fit O20", "oraimo SpaceBuds Neo+ ANC Earbuds (OTW-323P)", "oraimo PowerJet 501 Power Bank, 50,000mAh, 85W",
    "itel ChargerFlow I 65W Triple-Port GaN Charger", "oraimo Watch Nova 2 Smart Watch", "oraimo OpenSnap Air Open-Ear True Wireless Earbuds",
    "itel Power Go Portable Power Station, 100,000mAh (320Wh)", "itel Classic 4 Hair Clipper",
  ];
  const bestNames = [
    "oraimo Traveler 15 Flash 20,000mAh Power Bank, 15W", "itel Buds Air 5E True Wireless Earbuds", "itel Star 200 Power Bank, 20,000mAh",
    "oraimo Watch 6 Smart Watch", "oraimo SpaceBuds Lite Earbuds (OTW-324)", "itel ChargerEasy Nano 20W Dual-Port Charger (208U)",
    "itel M1 Multifunctional Juice Blender", "itel 2.4A Charging Cable (Micro USB, Type-C & iPhone)",
  ];
  const dealName = "itel Smart Watch Fit O20 Ultra";

  const stock = [
    {"name": "itel 20,000mAh Power Bank & Charger Bundle", "cat": "power-banks", "price": 22000, "img": "itel-20-000mah-power-bank-charger-bundle.jpg", "brand": "itel", "desc": "Reliable high-capacity power for your devices, complete with a charger for convenient recharging. A practical, all-in-one solution for everyday use.", "ngn": true},
    {"name": "itel 40,000mAh Power Bank, 22.5W Fast Charging", "cat": "power-banks", "price": 40000, "img": "itel-40-000mah-power-bank-22-5w-fast-charging.jpg", "brand": "itel", "desc": "Exceptional capacity meets fast, efficient charging. This itel power bank delivers 22.5W output to keep your devices powered through extended use, travel and long days away from a socket.", "ngn": true},
    {"name": "itel 30,000mAh Power Bank, 22.5W Fast Charging", "cat": "power-banks", "price": 31000, "img": "itel-30-000mah-power-bank-22-5w-fast-charging.jpg", "brand": "itel", "desc": "Generous capacity with fast, efficient charging. This itel power bank delivers 22.5W output to keep your devices powered through busy days, commutes and travel.", "ngn": true},
    {"name": "itel PowerPulse I Turbo 27,000mAh Power Bank, 65W", "cat": "power-banks", "price": 29000, "img": "itel-powerpulse-i-turbo-27-000mah-power-bank-65w.jpg", "brand": "itel", "desc": "Big capacity for long days and longer trips. This itel power bank holds enough charge to refill your phone several times over, so you can stay connected from morning to night, and for days when you can't reach a socket.", "ngn": true},
    {"name": "itel 20,000mAh Power Bank, 12W", "cat": "power-banks", "price": null, "img": null, "brand": "itel", "desc": "Reliable everyday power with a generous 20,000mAh capacity. This itel power bank delivers steady 12W charging to keep your phone and small devices topped up through the day and on the go."},
    {"name": "itel Star 200 Power Bank, 20,000mAh", "cat": "power-banks", "price": 19000, "img": "itel-star-200-power-bank-20-000mah.jpg", "brand": "itel", "desc": "A 20,000mAh power bank that can charge two devices at once, with a built-in LED flashlight, multiple safety protections and an anti-slip textured finish. Dependable backup power for home, work and travel.", "ngn": true},
    {"name": "itel 10,000mAh Power Bank, 20W Fast Charging", "cat": "power-banks", "price": 14000, "img": "itel-10-000mah-power-bank-20w-fast-charging.jpg", "brand": "itel", "desc": "Compact, portable power with quick 20W charging. This itel power bank is easy to carry and ready to top up your devices wherever the day takes you.", "ngn": true},
    {"name": "itel PowerEasy 1 MagSnap 10C Magnetic Power Bank, 10,000mAh", "cat": "power-banks", "price": 28000, "img": "itel-powereasy-1-magsnap-10c-magnetic-power-bank-10-000mah.jpg", "brand": "itel", "desc": "A 10,000mAh magnetic power bank with 22.5W fast charging, a built-in cable and a kickstand, so you can watch videos hands-free while it charges. It snaps onto your phone for charging without loose cables.", "ngn": true},
    {"name": "itel Power Turbo 60,000mAh Power Bank, 65W", "cat": "power-banks", "price": 70000, "img": "itel-power-turbo-60-000mah-power-bank-65w.jpg", "brand": "itel", "desc": "Huge 60,000mAh capacity with powerful 65W output. This itel power bank keeps phones, tablets and compatible laptops running through long trips, busy workdays and extended time away from a socket.", "ngn": true},
    {"name": "oraimo Traveler 15 Flash 20,000mAh Power Bank, 15W", "cat": "power-banks", "price": 19500, "img": "oraimo-traveler-15-20000.jpg", "brand": "oraimo", "ngn": true, "features": ["20,000mAh battery", "15W fast charging", "Type-C input & output", "LED battery indicator", "Safe charging protection", "Compact and portable"], "desc": "A 20,000mAh (74Wh) power bank with 15W fast charging, built with oraimo's AniFast chip that identifies your device's fast-charging protocol to deliver the speediest possible charge. Three outputs (two USB-A and one Type-C) charge several devices at once, and the Type-C port works both ways, so you can recharge the power bank with the same cable. Over-current, short-circuit, over-discharge and overcharge protections keep charging safe."},
    {"name": "oraimo PowerNova Q21 Power Bank, 20,000mAh, 22.5W", "cat": "power-banks", "price": 24000, "img": null, "brand": "oraimo", "ngn": true, "features": ["20,000mAh capacity", "22.5W fast charging", "Type-C input & output", "Multiple charging ports", "LED battery display", "Safe charging protection"], "desc": "A 20,000mAh power bank with 22.5W fast charging and AniFast technology, which charges a phone to 60% in about 30 minutes. It works with Apple, Samsung and other phones, is compatible with PD3.0 and QC3.0, and has a smart digital display that shows the remaining charge. It comes with a 365-day warranty."},
    {"name": "oraimo PowerFlow B11 Power Bank, 10,000mAh, 15W (OPB-1102)", "cat": "power-banks", "price": 15000, "img": "oraimo-powerflow-b11-10000.jpg", "brand": "oraimo", "desc": "An ultra-slim 10,000mAh power bank with 15W output and three ports (two USB-A and one USB-C) that charge up to three devices at once. AniFast technology detects each device's best charging speed, the Type-C port charges your devices and recharges the power bank with one cable, and a multi-protection system keeps charging safe.", "ngn": true},
    {"name": "oraimo PowerBox 300 Lite 30,000mAh Power Bank, 15W", "cat": "power-banks", "price": 30000, "img": null, "brand": "oraimo", "desc": "A 30,000mAh (111Wh) power bank with 15W Type-C input and output, three outputs and a built-in LED torch for emergencies. AniFast technology delivers the fastest safe charge for each device, a multi-protection safety system guards against overcharge and short circuits, and a 365-day warranty comes with it.", "ngn": true},
    {"name": "oraimo PowerNova L21 Pocket-Size Power Bank, 20,000mAh, 30W", "cat": "power-banks", "price": 32000, "img": null, "brand": "oraimo", "ngn": true, "desc": "A pocket-sized 20,000mAh power bank with 30W fast charging that supports PD and QC protocols for modern phones. A built-in Type-C cable doubles as a carrying lanyard, a smart LED display shows the exact charge left, and Type-C and USB-A ports charge up to three devices at once with full safety protection."},
    {"name": "oraimo MagPower 15 Magnetic Power Bank, 10,000mAh", "cat": "power-banks", "price": 40000, "img": null, "brand": "oraimo", "desc": "A 10,000mAh magnetic power bank that snaps onto MagSafe-compatible iPhones with a strong 10N magnet and charges them wirelessly at up to 15W. It also gives 22.5W wired charging through USB-C and USB-A, charges up to three devices at once, and has a foldable metal stand for hands-free viewing in portrait or landscape.", "ngn": true},
    {"name": "oraimo PowerNova Q31 Power Bank, 30,000mAh, 22.5W", "cat": "power-banks", "price": 33000, "img": null, "brand": "oraimo", "desc": "A 30,000mAh power bank with 22.5W AniFast charging that takes a phone to 60% in about 30 minutes and charges it up to 7 times. It is compatible with PD 3.0 and QC 3.0, charges three devices at once through two USB-A ports and one Type-C port, and has a smart LED display, 15-layer protection and a 365-day warranty.", "ngn": true},
    {"name": "oraimo Traveler Link 27 Power Bank, 27,000mAh, 12W", "cat": "power-banks", "price": 30000, "img": "oraimo-traveler-link-27-power-bank-27-000mah-12w.jpg", "brand": "oraimo", "desc": "A 27,000mAh (99.9Wh) power bank with three built-in charging cables (Type-C, Micro-USB and Lightning) plus a USB-A port, so you can charge up to four devices at once without carrying extra cables. AniFast technology delivers up to 12W per output, it recharges through Type-C or Micro-USB, and an LED torch is built in.", "ngn": true},
    {"name": "oraimo PowerNova Q41 Power Bank, 40,000mAh, 35W", "cat": "power-banks", "price": 45000, "img": null, "brand": "oraimo", "desc": "A 40,000mAh power bank with 35W two-way fast charging, so it quickly powers your devices and quickly recharges itself. Two chargers can feed it at once, a real-time power display shows the exact charge, and it charges up to four devices at the same time. It works with over 1,000 devices.", "ngn": true},
    {"name": "oraimo PowerJet 501 Power Bank, 50,000mAh, 85W", "cat": "power-banks", "price": 71000, "img": "oraimo-powerjet-501-power-bank-50-000mah-85w.jpg", "brand": "oraimo", "desc": "A 50,000mAh power bank with 85W ultra-fast charging for laptops and phones, giving up to 11 days of power. It can power a laptop and phones at once, recharges from 0 to 80% in about 2.5 hours with a 65W charger, and shows real-time input and output power. It charges up to four devices at once, works with over 1,000 digital devices, and has a hand strap and 15-layer protection.", "ngn": true},
    {"name": "itel Power Go Portable Power Station, 100,000mAh (320Wh)", "cat": "power-banks", "price": 120000, "img": "itel-power-go-portable-power-station-100-000mah-320wh.jpg", "brand": "itel", "desc": "A portable power station with 130W total output and a long-life LiFePO4 battery rated for over 3,000 cycles. USB-C fast charging goes up to 100W for laptops, and it can be recharged from a solar panel. It has multiple ports and an LED light, and it charges phones, laptops and power banks while running DC fans, a DC TV and other small devices. A dependable backup during power outages, at home or while travelling.", "ngn": true},
    {"name": "itel Power Go Pro Portable Power Station, 100,000mAh (320Wh)", "cat": "power-banks", "price": 160000, "img": "itel-power-go-pro-portable-power-station-100-000mah-320wh.jpg", "brand": "itel", "desc": "A portable power station with a 200W AC outlet, 65W fast USB-C, three USB-A ports and four DC ports, powered by a long-life LiFePO4 battery. It weighs just 3.2kg, which makes it easy to carry for work, travel, outdoor use and power cuts. It recharges in about 4 hours from a 100W solar panel or USB-C, and a 3-level LED light with SOS mode is built in.", "ngn": true},
    {"name": "itel ChargerFlow I 65W Triple-Port GaN Charger", "cat": "chargers", "price": 28500, "img": "itel-chargerflow-i-65w-triple-port-gan-charger.jpg", "brand": "itel", "desc": "A powerful 65W itel charger for fast, efficient charging. It has enough output to charge phones and tablets quickly, and to power compatible laptops, so one charger covers all your devices at home, at work and on the road.", "ngn": true},
    {"name": "SHPLUS 55W PD Fast Charger (Type-C & Android)", "cat": "chargers", "price": 6500, "img": null, "desc": "A 55W Power Delivery fast charger that comes with a cable. It is available in Type-C and Android (micro USB) versions, so you can pick the connector that matches your phone. It's built for fast, reliable charging at home, at work or on the go.", "ngn": true},
    {"name": "itel ChargerEasy Nano 20W Dual-Port Charger (208U)", "cat": "chargers", "price": 11000, "img": "itel-chargereasy-nano-20w-dual-port-charger-208u.jpg", "brand": "itel", "desc": "A compact 20W itel charger that charges compatible phones and small devices quickly. Easy to carry and ready for everyday use at home, at work or while traveling.", "ngn": true},
    {"name": "itel 12W Charger", "cat": "chargers", "price": 6000, "img": "itel-dual-usb-charger.jpg", "brand": "itel", "desc": "A dependable 12W itel charger for steady, everyday charging. Suitable for phones and small devices, and simple to use at home, at work or while traveling.", "ngn": true},
    {"name": "itel 2.4A Charging Cable (Micro USB, Type-C & iPhone)", "cat": "chargers", "price": 3000, "img": "itel-2-4a-charging-cable-micro-usb-type-c-iphone.jpg", "brand": "itel", "desc": "A dependable itel cable with up to 2.4A charging for fast, steady power. Available in Android (micro USB), Type-C and iPhone (Lightning) versions, so there's a match for almost every phone.", "ngn": true},
    {"name": "itel 2.1A Charging Cord (Type-C, iPhone & Android)", "cat": "chargers", "price": 3000, "img": "itel-2-1a-charging-cord-type-c-iphone-android.jpg", "brand": "itel", "desc": "A reliable itel charging cord with up to 2.1A output for steady, efficient charging. Available in Type-C, iPhone (Lightning) and Android (micro USB) versions, so there's one for almost every phone.", "ngn": true},
    {"name": "itel Buds Fit 5 Wireless Earbuds", "cat": "earbuds", "price": 28000, "img": "itel-budsfit-5.jpg", "brand": "itel", "desc": "Open-ear C-Bridge earbuds that are light, clip on securely and stay comfortable all day, with deep bass, up to 32 hours of total playtime with the case, and AI noise reduction for clearer calls. A low-latency mode keeps audio in sync for gaming, and water resistance makes them suitable for workouts.", "ngn": true},
    {"name": "itel Buds 5 True Wireless Earbuds", "cat": "earbuds", "price": 28000, "img": "buds-5-anc.jpg", "brand": "itel", "desc": "True wireless earbuds with 32dB active noise cancellation, 13mm bass drivers for deep sound and 4-mic noise reduction for clearer calls. They give up to 32 hours of total battery life and have a low-latency mode, which makes them good for music, calls and light gaming. The lightweight design is comfortable for long wear and protects against dust and sweat.", "ngn": true},
    {"name": "itel Buds Air 5E True Wireless Earbuds", "cat": "earbuds", "price": 18000, "img": "itel-buds-air-5e-true-wireless-earbuds.jpg", "brand": "itel", "desc": "Lightweight, compact earbuds with deep bass, a stable Bluetooth 5.4 connection and up to 39 hours of total playtime with the charging case. They have IP54 sweat and splash resistance, and the case charges by USB-C.", "ngn": true},
    {"name": "itel Buds Go True Wireless Earbuds", "cat": "earbuds", "price": 18000, "img": "itel-buds-go-true-wireless-earbuds.jpg", "brand": "itel", "desc": "True wireless earbuds with a powerful 13mm bass driver for rich, deep sound, ENC technology that keeps your voice clear on calls even in busy places, and a long-lasting 24-hour battery.", "ngn": true},
    {"name": "itel BudsNeo 3 Wireless Earbuds", "cat": "earbuds", "price": 17500, "img": "itel-budsneo-3-wireless-earbuds.jpg", "brand": "itel", "desc": "Wireless earbuds with powerful super bass, clear ENC calls, ultra-low latency for gaming and a massive 100-hour total playtime. The smooth, pebble-inspired shape fits comfortably, and the design won a Golden Winner award at the French Design Awards 2025.", "ngn": true},
    {"name": "itel Buds Ace New Wireless Earbuds", "cat": "earbuds", "price": 20000, "img": "itel-buds-ace-new-wireless-earbuds.jpg", "brand": "itel", "desc": "Wireless earbuds tuned for clear, balanced sound across music, video and calls, with stable Bluetooth 5.3 and quick pairing with your phone or tablet. Touch controls let you manage music and calls, and IPX5 splash resistance keeps them ready for sweat and rain.", "ngn": true},
    {"name": "itel K24 Pro Wired Earphones", "cat": "earbuds", "price": null, "img": "itel-k24-pro-wired-earphones.jpg", "brand": "itel", "desc": "In-ear wired earphones with a tangle-free design and polished metal buds. The 10mm drivers deliver strong bass, and the in-line mic lets you control music and take calls. A simple, dependable pair for everyday listening."},
    {"name": "TWS Wireless Earbuds", "cat": "earbuds", "price": 6000, "img": "tws-wireless-earbuds.jpg", "desc": "True wireless earbuds with no cables to tangle. They pair quickly with your phone over Bluetooth, deliver clear sound for music, videos and calls, and come with a charging case so you can keep listening on the go.", "ngn": true},
    {"name": "Freezel Wireless Earbuds", "cat": "earbuds", "price": 9000, "img": null, "desc": "Wireless earbuds for everyday listening. They pair with your phone over Bluetooth for music, videos and calls, and come with a portable charging case so you can keep going on the go.", "ngn": true},
    {"name": "P9 Wireless Bluetooth Headphones", "cat": "earbuds", "price": 16000, "img": "p9-wireless-bluetooth-headphones.jpg", "desc": "Over-ear headphones with Bluetooth 5.0 for a stable connection, deep bass, clear treble and a built-in mic for hands-free calls. Soft cushioned ear cups and an adjustable headband keep them comfortable for long sessions, and they fold up for easy carrying. Buttons on the ear cup control volume, music and calls, and they also work through an AUX cable, a Micro SD card or the FM radio.", "ngn": true},
    {"name": "JBL Tune 510BT Wireless On-Ear Headphones", "cat": "earbuds", "price": 15500, "img": "jbl-tune-510bt-wireless-on-ear-headphones.jpg", "desc": "Wireless on-ear headphones with JBL Pure Bass sound and up to 40 hours of battery life. Five minutes of USB-C charging gives an extra 2 hours of playback. Bluetooth 5.0 lets you connect to Siri or Google without touching your phone, and the foldable design makes them easy to take anywhere. A built-in mic handles hands-free calls.", "ngn": true},
    {"name": "Bose QuietComfort Ultra Headphones", "cat": "earbuds", "price": 25000, "img": "bose-quietcomfort-ultra-headphones.jpg", "desc": "Premium headphones from Bose, a brand known for rich, balanced sound and all-day comfort. Made for music, calls and travel, with the quality and build you expect from a trusted audio name.", "ngn": true},
    {"name": "oraimo SpaceBuds Hybrid ANC Earbuds (OTW-630)", "cat": "earbuds", "price": null, "img": "oraimo-spacebuds-otw630.jpg", "brand": "oraimo", "desc": "True wireless earbuds with hybrid active noise cancellation that cuts ambient noise by up to 50dB, plus Sound360 spatial audio that surrounds you with rich, detailed sound. AI noise cancellation and ENC HD voice keep calls clear, dual-device connection lets you switch between two devices, and a low-latency game mode keeps audio in sync. They use Bluetooth 5.4, give up to 7 hours of playback (ANC off) with another 25 hours from the case, and have IP54 sweat and dust protection on the earbuds."},
    {"name": "oraimo OpenSnap Air Open-Ear True Wireless Earbuds", "cat": "earbuds", "price": 30000, "img": "oraimo-opensnap-air.jpg", "brand": "oraimo", "desc": "Open-ear earbuds that sit comfortably on the ear without blocking it, so you hear your music and your surroundings. A 12mm composite driver delivers deep bass and clear highs, the ergonomic rear curve keeps the fit light all day, and adaptive volume control adjusts to your environment. Dual-device connection and Bluetooth 6.0 keep the link stable.", "ngn": true},
    {"name": "oraimo SpaceBuds Neo+ ANC Earbuds (OTW-323P)", "cat": "earbuds", "price": 25500, "img": "oraimo-spacebuds-neo-plus.jpg", "brand": "oraimo", "desc": "Wireless earbuds made to shut out the noise around you so you can tune in to your music. They are comfortable for long listening, handle calls clearly, and come with a portable charging case for use all day.", "ngn": true},
    {"name": "oraimo SpaceBuds Neo Earbuds (OTW-323)", "cat": "earbuds", "price": 27000, "img": "oraimo-spacebuds-neo.jpg", "brand": "oraimo", "desc": "Wireless earbuds tuned for full, immersive sound that brings out deep bass and clear detail in music, videos and calls. A comfortable fit and a portable charging case make them easy to wear and carry all day.", "ngn": true},
    {"name": "oraimo BoomPop Lite Wireless Headphones (OHP-317)", "cat": "earbuds", "price": 38000, "img": "oraimo-boompop-lite.jpg", "brand": "oraimo", "desc": "Portable wireless audio from oraimo that keeps the music playing wherever you go. Easy to connect to your phone, with powerful sound for relaxing, working or sharing with friends.", "features": ["Available in black and white", "Up to 65 hours of playtime", "HavyBass sound", "365-day oraimo warranty"], "ngn": true},
    {"name": "oraimo SpaceBox Pro Bluetooth Speaker", "cat": "earbuds", "price": null, "img": "oraimo-spacebox-pro-bluetooth-speaker.jpg", "brand": "oraimo", "desc": "A powerful oraimo wireless music player with big, bass-rich sound that fills a room. Simple to connect and built for home, outdoor use and gatherings."},
    {"name": "itel Smart Watch Fit O20 Ultra", "cat": "smart-watches", "price": 22000, "img": "itel-smart-watch-fit-o20-ultra.jpg", "brand": "itel", "desc": "A sports smartwatch with a 2.01-inch curved screen and a premium metal frame. It syncs with Strava and is IP68 waterproof, so it's ready for workouts, outdoor activities and everyday wear.", "ngn": true},
    {"name": "itel Smart Watch Fit O20", "cat": "smart-watches", "price": 22000, "img": "p-watch-black.png", "brand": "itel", "desc": "An AI-powered smartwatch that creates a new watch face from your idea each day. It includes two straps so you can change your look, and an IP68 rating protects it from water and dust, which suits workouts and outdoor adventures. It has a 2.04-inch HD screen, Bluetooth calling and 24-hour health monitoring.", "ngn": true},
    {"name": "itel Smart Watch Fit O23 Plus", "cat": "smart-watches", "price": 31000, "img": "itel-smart-watch-fit-o23-plus.jpg", "brand": "itel", "desc": "A smartwatch with a full-metal build, real-time heart rate tracking, sleep monitoring and emoji customization. A stylish, practical companion for fitness, health tracking and everyday wear.", "ngn": true},
    {"name": "itel Smart Watch Fit O45: Edge In Motion", "cat": "smart-watches", "price": 38000, "img": null, "brand": "itel", "desc": "A bold, round smartwatch with a metallic bezel, available in gold and blue. Its watch face shows time, heart rate, steps, weather and battery level at a glance, so it fits your workouts as well as your day.", "ngn": true},
    {"name": "itel Smart Watch O43", "cat": "smart-watches", "price": 45000, "img": "itel-smart-watch-o43.jpg", "brand": "itel", "desc": "A 1.43-inch AMOLED smartwatch with a sharp 466 x 466 display, up to 10 days of battery life on normal use, and fast charging that gives 24 hours of use from a 5-minute charge. It has Bluetooth 5.3, IP68 water resistance and over 100 sports modes.", "ngn": true},
    {"name": "itel Smart Watch Apex N10", "cat": "smart-watches", "price": 56000, "img": "itel-smart-watch-apex-n10.jpg", "brand": "itel", "desc": "A fitness-focused smartwatch with a 1.43-inch curved AMOLED screen, a metal frame, a rotating crown and 5ATM water resistance for swimming. It has built-in GPS, Bluetooth calling, heart rate and SpO2 tracking, sleep monitoring and over 100 sports modes. The battery recharges fully in about 70 minutes.", "ngn": true},
    {"name": "oraimo Watch 2R Bluetooth Calling Smart Watch", "cat": "smart-watches", "price": 55000, "img": "oraimo-watch-2r.jpg", "brand": "oraimo", "desc": "A smartwatch with a 1.39-inch display, 120+ sports modes and 24-hour monitoring of heart rate, blood oxygen and sleep, with an IP68 rating against dust and water. Bluetooth calling and SMS reply keep you connected from your wrist, and the battery lasts up to 7 days. A soft, detachable 22mm silicone strap and over 150 watch faces let you match it to your style.", "ngn": true},
    {"name": "oraimo Watch 5 Max Bluetooth Calling Smart Watch", "cat": "smart-watches", "price": 20000, "img": "oraimo-watch-5-max.jpg", "brand": "oraimo", "desc": "A smartwatch with a large 2.01-inch display, Bluetooth 5.3 calling, heart rate and blood oxygen monitoring, and 100+ sports modes. A 300mAh battery lasts up to 7 days on normal use, and an IP68 rating protects it from sweat, rain and dust. It works with Android 7.0+ and iOS 12.0+ through the oraimo Health app.", "ngn": true},
    {"name": "oraimo Watch 6 Smart Watch", "cat": "smart-watches", "price": 35000, "img": "oraimo-watch-6.jpg", "brand": "oraimo", "desc": "A smartwatch with a 2.04-inch TFT display, HD calling and AI-generated watch faces, with 120+ designs in the oraimo Health app. It tracks heart rate, blood oxygen, stress and sleep, supports 105+ sports modes, and lasts up to 8 days on normal use with over 33 days on standby. An IP68 rating protects it from rain and sweat, and an extra silicone strap is included.", "ngn": true},
    {"name": "oraimo Watch Nova 2 Smart Watch", "cat": "smart-watches", "price": 52000, "img": "oraimo-watch-nova-2.jpg", "brand": "oraimo", "desc": "A smartwatch with a 2.01-inch curved AMOLED touchscreen protected by scratch-resistant Panda Glass, and wireless HD calling over Bluetooth 5.3. It tracks heart rate, blood oxygen, stress and sleep, supports 100+ sports modes, and runs up to 20 days on normal use. It has an IP68 rating, AI-generated watch faces, and an extra silicone strap in the box.", "ngn": true},
    {"name": "itel Classic 3 Hair Clipper", "cat": "home", "price": 25000, "img": null, "brand": "itel", "desc": "A cordless hair clipper with a solid metal body, precision stainless-steel blades and a heavy-duty motor for clean, professional cuts. A 2500mAh battery gives up to 300 minutes of cordless use, and a smart LED display shows the remaining charge.", "ngn": true},
    {"name": "itel Hair Clipper Classic 2 Pro", "cat": "home", "price": 23000, "img": "itel-hair-clipper-classic-2-pro.jpg", "brand": "itel", "desc": "A multifunctional clipper for home and professional use, with self-sharpening stainless steel blades, a 6500 RPM high-speed motor and a compact, lightweight aluminum alloy and ABS body. The rechargeable battery of up to 2000mAh gives several hours of use, and it charges by USB Type-C in about 3 hours. Multiple guide combs let you choose different hair lengths and styles.", "ngn": true},
    {"name": "itel Classic 4 Hair Clipper", "cat": "home", "price": 28000, "img": "itel-classic-4-hair-clipper.jpg", "brand": "itel", "desc": "A rechargeable clipper with self-sharpening stainless steel blades, a high-speed 6500 RPM motor and a durable aluminum alloy and ABS body. It charges by USB Type-C and comes with multiple guide combs for different hair lengths and styles, for clean cuts at home or in the shop.", "ngn": true},
    {"name": "itel Smart Trimmer 3-in-1 Kit", "cat": "home", "price": 20000, "img": "itel-smart-trimmer-3-in-1-kit.jpg", "brand": "itel", "desc": "A versatile grooming kit with a powerful motor and detachable heads, so one device handles facial hair, haircut edges and nose hair. It is rechargeable by USB or Type-C, so you can power it from a laptop, power bank or charger, and its compact, lightweight design suits home use and travel.", "ngn": true},
    {"name": "itel 16-Inch AC/DC Solar Rechargeable Fan", "cat": "home", "price": 95000, "img": "itel-16-inch-ac-dc-solar-rechargeable-fan.jpg", "brand": "itel", "desc": "A 16-inch rechargeable fan with low, medium and high speeds and oscillation to cool a wide area. It charges two ways, from mains or generator power or from the 10W solar panel in the box, which makes it a good fit where power is unreliable. The USB port lets it double as a power bank for your phone, and the pack includes two wired LED bulbs.", "ngn": true},
    {"name": "itel M1 Multifunctional Juice Blender", "cat": "home", "price": 35000, "img": "itel-m1-multifunctional-juice-blender.jpg", "brand": "itel", "desc": "A 2-litre electric blender with six speeds for grinding, crushing ice, mixing and making smoothies, juices and cocktails. It has a comfort grip, cord storage and dishwasher-safe parts that make cleanup easy.", "ngn": true},
    {"name": "itel Electric Kettle 1S", "cat": "home", "price": 25000, "img": "itel-electric-kettle-1s.jpg", "brand": "itel", "desc": "A 1.7-litre, 1700W kettle with a double-wall design: a food-grade stainless steel inner and a PP outer shell that stays cooler to the touch. It switches off automatically when the water boils and has boil-dry and overheat protection. The 360-degree cordless base makes it easy to lift and pour, and a light indicator shows when it's on.", "ngn": true},
    {"name": "itel Extension Box", "cat": "home", "price": 13000, "img": "itel-extension-box.jpg", "brand": "itel", "desc": "A power extension with multiple sockets and a 3-metre cord, so you can plug in laptops, TVs, blenders and other appliances from one wall outlet. Heat-resistant materials add durability, and the child-safe socket design stops small fingers from entering.", "ngn": true},
    {"name": "Rexi 30000mAh Power Bank, 22.5W", "cat": "power-banks", "price": 31000, "img": "rexi-30000mah-power-bank-22-5w.jpg", "brand": "rexi", "ngn": true, "features": ["30,000mAh capacity", "22.5W super fast charging", "PD 20W fast charging", "Digital battery display", "Carry strap"], "desc": "Never run out of power with this 30,000mAh Power Bank. Designed for long-lasting performance, it delivers reliable charging for your devices, making it the perfect companion for work, travel, and everyday use."},
    {"name": "Rexi RMF-40-QL Power Bank, 40000mAh", "cat": "power-banks", "price": null, "img": "rexi-rmf40-40000.jpg", "brand": "rexi"},
    {"name": "Rexi RMF50-QL Power Bank, 50000mAh", "cat": "power-banks", "price": null, "img": "rexi-rmf50-50000.jpg", "brand": "rexi"},
    {"name": "oraimo SpaceBuds Lite Earbuds (OTW-324)", "cat": "earbuds", "price": 18000, "img": "oraimo-spacebuds-lite.jpg", "brand": "oraimo", "ngn": true},
    {"name": "Conch In-Ear Earphone (OEP-E10)", "cat": "earbuds", "price": null, "img": "conch-oep-e10-earphone.jpg"},
    {"name": "oraimo AniFast USB-C Charger + C-to-C Cable", "cat": "chargers", "price": null, "img": "oraimo-anifast-usbc-charger.jpg", "brand": "oraimo"},
    {"name": "oraimo OpenArc Open-Ear Earbuds (OPN-675)", "brand": "oraimo", "cat": "earbuds", "price": null, "img": "oraimo-openarc-opn675.jpg", "features": ["Open-ear true wireless design", "HD voice for calls", "Personalised lighting effect", "HavyBass sound", "365-day oraimo warranty"]},
    {"name": "oraimo Watch 4 Nano Smart Watch", "brand": "oraimo", "cat": "smart-watches", "price": null, "img": "oraimo-watch-4-nano.jpg", "features": ["Square display with textured design", "Free extra strap in the box", "365-day oraimo warranty"]},
    {"name": "oraimo PowerCube 10 Sleek 10W Type-C Charger", "brand": "oraimo", "cat": "chargers", "price": null, "img": "oraimo-powercube-10-sleek.jpg", "features": ["Compact 10W fast charger", "AniFast smart charging", "Free Type-C fast charging cable", "365-day oraimo warranty"]},
    {"name": "oraimo PowerCube 61 Micro-USB Charger", "brand": "oraimo", "cat": "chargers", "price": null, "img": "oraimo-powercube-61.jpg", "features": ["Ultra-portable charger", "AniFast smart charging", "Free Micro-USB charging cable", "365-day oraimo warranty"]},
    {"name": "oraimo lite USB-A to Micro-USB Cable, 1m", "brand": "oraimo", "cat": "chargers", "price": 3000, "img": "oraimo-lite-micro-usb-cable.jpg", "features": ["1-metre USB-A to Micro-USB", "Fast and durable"], "ngn": true},
    {"name": "oraimo lite USB-A to Type-C Cable, 1m", "brand": "oraimo", "cat": "chargers", "price": 3000, "img": "oraimo-lite-type-c-cable.jpg", "features": ["1-metre USB-A to Type-C", "Fast, stable data sync"], "ngn": true},
    {"name": "oraimo Lightning Data Cable, 1m", "brand": "oraimo", "cat": "chargers", "price": 3000, "img": "oraimo-lightning-cable-1m.jpg", "features": ["1-metre Lightning (iPhone) cable", "2A fast charging", "Built to last longer", "180-day oraimo warranty"], "ngn": true},
    {"name": "oraimo Fast Charge Lightning Cable", "brand": "oraimo", "cat": "chargers", "price": null, "img": "oraimo-fast-charge-lightning-cable.jpg", "features": ["Lightning (iPhone) connector", "Fast charging", "365-day oraimo warranty"]},
    {"name": "oraimo Necklace Pro Neckband Earphones (OEB-E80D)", "cat": "earbuds", "price": null, "img": "oraimo-necklace-pro-neckband-earphones-oeb-e80d.jpg", "brand": "oraimo", "features": ["Wireless neckband design", "Zero noise, pure sound", "HavyBass sound", "365-day oraimo warranty"]},
    {"name": "oraimo lite Type-C Wired Earphones", "cat": "earbuds", "price": null, "img": "oraimo-lite-type-c-wired-earphones.jpg", "brand": "oraimo", "features": ["Digital Type-C plug", "Optimised deep bass", "In-line mic"]},
    {"name": "oraimo PowerGaN 351 35W GaN Charger (OCW-5351UCC)", "cat": "chargers", "price": null, "img": "oraimo-powergan-351-35w-gan-charger-ocw-5351ucc.jpg", "brand": "oraimo", "features": ["35W GaN ultra-fast charging", "Type-C output", "AniFast smart charging", "Free fast charging cable", "365-day oraimo warranty"]},
    {"name": "oraimo PowerGaN 251 25W GaN Charger (OCW-5251UCC)", "cat": "chargers", "price": null, "img": "oraimo-powergan-251-25w-gan-charger-ocw-5251ucc.jpg", "brand": "oraimo", "features": ["25W GaN ultra-fast charging", "Type-C output", "AniFast smart charging", "Free fast charging cable", "365-day oraimo warranty"]},
    {"name": "Infinix 33W GaN Fast Charger", "cat": "chargers", "price": null, "img": "infinix-33w-gan-fast-charger.jpg", "features": ["33W GaN fast charging", "Type-C charging cable in the box"]},
    {"name": "Samsung Super Fast Charging PD Charger", "cat": "chargers", "price": null, "img": "samsung-super-fast-charging-pd-charger.jpg", "features": ["Super fast PD charging", "USB-C cable in the box"]},
    {"name": "USB-C to USB-C Charge Cable, 1m (Woven)", "cat": "chargers", "price": 3000, "img": "usb-c-to-usb-c-charge-cable-1m-woven.jpg", "features": ["1-metre USB-C to USB-C", "Woven cable"], "ngn": true},
    {"name": "USB-C to Lightning Cable, 1m", "cat": "chargers", "price": 3000, "img": "usb-c-to-lightning-cable-1m.jpg", "features": ["1-metre USB-C to Lightning (iPhone)", "Supports fast charging with a USB-C charger"], "ngn": true},
    {"name": "oraimo SmartClipper 2C Hair Clipper (OPC-CL30C)", "cat": "home", "price": null, "img": "oraimo-smartclipper-2c-hair-clipper-opc-cl30c.jpg", "brand": "oraimo", "features": ["4 guide combs", "Effortless grooming", "365-day oraimo warranty"]},
    {"name": "oraimo SmartClipper 2 Cordless Hair Clipper (OPC-CL30)", "cat": "home", "price": null, "img": "oraimo-smartclipper-2-cordless-hair-clipper-opc-cl30.jpg", "brand": "oraimo", "features": ["Cordless", "Professional and powerful", "4 guide combs", "AniFast charging", "365-day oraimo warranty"]},
    {"name": "oraimo EasyCut Hair Clipper (OCL-230)", "cat": "home", "price": null, "img": "oraimo-easycut-hair-clipper-ocl-230.jpg", "brand": "oraimo", "features": ["Sharp cuts", "Long-lasting power", "365-day oraimo warranty"]},
    {"name": "oraimo Smart Trimmer (OPC-TR12)", "cat": "home", "price": null, "img": "oraimo-smart-trimmer-opc-tr12.jpg", "brand": "oraimo", "features": ["Multi-functional trimmer", "Long-lasting battery", "3 guide combs", "365-day oraimo warranty"]},
    {"name": "itel Solar Light L1", "cat": "home", "price": null, "img": "itel-solar-light-l1.jpg", "brand": "itel", "features": ["Multifunctional solar light", "Solar panel charging"]},
    {"name": "Rugged Ring-Stand Phone Case", "cat": "cases", "price": null, "img": "rugged-ring-stand-phone-case.jpg", "features": ["Shockproof rugged build", "Built-in ring stand", "Camera protection"]},
    {"name": "Yazmak MagSafe Phone Case (Samsung Galaxy S Ultra)", "cat": "cases", "price": null, "img": "yazmak-magsafe-phone-case-samsung-galaxy-s-ultra.jpg", "features": ["MagSafe magnetic ring", "Several colours available", "Camera protection"]},
    {"name": "Leather Protective Case", "cat": "cases", "price": null, "img": "leather-protective-case.jpg", "features": ["Leather finish", "Several colours available"]},
    {"name": "oraimo PowerCube 12 Sleek 12W Charger Kit", "cat": "chargers", "price": 6000, "img": null, "brand": "oraimo", "ngn": true, "features": ["12W total output", "Two USB ports (up to 5V/2.4A each)", "Charging cable included", "Multi-protection safety"], "desc": "A compact 12W wall charger kit with two USB ports and a charging cable included, so it is ready to use out of the box. The finish resists sweat and fingerprints."},
    {"name": "Rexi Type-C Cord", "cat": "chargers", "price": 3000, "img": null, "brand": "rexi", "ngn": true, "features": ["USB Type-C", "Available in bright colours"], "desc": "A Type-C charging cord for phones and other Type-C devices, available in bright colours."},
  ];

  const catalogue = [...stock].filter(
    (p, i, all) => all.findIndex(q => q.name === p.name) === i
  );
  const pick = (names) => names.map(n => catalogue.find(p => p.name === n)).filter(p => p && p.price != null);
  const products = pick(featuredNames), bestSellers = pick(bestNames);

  const categories = [
    { slug: "smart-watches", icon: "⌚", name: "Smart Watches", lead: "itel and oraimo smart watches for calls, fitness and everyday wear." },
    { slug: "earbuds",       icon: "🎧", name: "Earbuds",       lead: "Wireless earbuds, headphones and earphones for every budget." },
    { slug: "chargers",      icon: "⚡", name: "Chargers",      lead: "Fast chargers and cables to keep everything topped up." },
    { slug: "power-banks",   icon: "🔋", name: "Power Banks",   lead: "Portable power and power stations for long days, NEPA cuts and everything in between." },
    { slug: "home",          icon: "🏠", name: "Home & Grooming", lead: "Clippers, trimmers, fans, blenders, kettles and extension boxes." },
    { slug: "cases",         icon: "📱", name: "Phone Cases",   lead: "Tough, stylish cases to protect your phone." },
  ];

  const brands = [
    { slug: "oraimo", name: "Oraimo", always: true },
    { slug: "itel",   name: "itel",   always: true },
    { slug: "rexi",   name: "Rexi" },
  ];
  const inCat = (slug) => catalogue.filter(p => p.cat === slug);
  const countLabel = (slug) => { const n = inCat(slug).length; return n ? `${n} product${n > 1 ? "s" : ""}` : "Coming soon"; };

  const features = [
    { t: "Brands you know",     d: "oraimo, itel and Rexi chargers, power banks, earbuds and watches.", i: "M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" },
    { t: "Prices in naira",     d: "Every price is shown upfront. No dollar maths, no surprises.",      i: "M6 4v16M18 4v16M6 4l12 16M3 10h18M3 14h18" },
    { t: "Order on WhatsApp",   d: "Add to cart and send your order. We confirm stock and the delivery fee, you pay, then we dispatch.", i: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
    { t: "Delivery anywhere",    d: "In Lokoja we bring it to you. Outside Lokoja we ship with GIG Logistics, priced by package weight and your location.",   i: "M3 12h13l-4-4M16 12l-4 4M20 6v12" },
  ];

  const stars = (r) => "★★★★★".slice(0, Math.round(r)) + "☆☆☆☆☆".slice(0, 5 - Math.round(r));

  const catSlugs = { "smart-watches": 1, earbuds: 1, chargers: 1, "power-banks": 1, home: 1, cases: 1 };
  function productCard(p, linked) {
    const go = (inner, cls) => linked && catSlugs[p.cat]
      ? `<a class="${cls}" href="#cat/${p.cat}" data-focus="${p.name.replace(/"/g, "&quot;")}">${inner}</a>` : inner;
    const money = (n) => p.ngn ? "₦" + n.toLocaleString("en-NG") : "$" + n;
    const old = p.old ? `<s>${money(p.old)}</s>` : "";
    const priced = p.price != null;
    return `
      <article class="card">
        <div class="card__media">
          ${go(!p.img ? `<div class="pmock pmock--${{ "power-banks": "bank", chargers: "charger", earbuds: "buds", "smart-watches": "watch", home: "charger", cases: "case" }[p.cat] || "bank"}" aria-hidden="true"></div><span class="card__nophoto">Photo coming soon</span>` : `<img class="card__img${p.brand !== undefined || !p.rating ? " card__img--photo" : ""}" src="${IMG[p.img]}" alt="${p.name}" loading="lazy" />`, "card__link card__link--media")}
        </div>
        ${go(`<h3 class="card__name">${p.name}</h3>`, "card__link")}
        ${p.rating ? `<div class="card__rating">${stars(p.rating)} <small>${p.rating} · ${p.reviews}</small></div>` : ""}
        <div class="card__foot">
          ${priced
            ? `<span class="price"><b>${money(p.price)}</b>${old}</span>
               ${p.ngn ? `<button class="add-btn" type="button" data-name="${p.name.replace(/"/g, "&quot;")}">Add to cart</button>` : ""}`
            : `<span class="price price--ask">Price on request</span>`}
        </div>
        ${p.features || p.desc ? `
        <details class="card__more">
          <summary>Features &amp; details</summary>
          ${p.features ? `<ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>` : ""}
          ${p.desc ? `<p>${p.desc}</p>` : ""}
        </details>` : ""}
      </article>`;
  }

  const render = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

  render("#productGrid", products.map(p => productCard(p, true)).join(""));
  render("#bestGrid",    bestSellers.map(p => productCard(p, true)).join(""));
  const deal = catalogue.find(p => p.name === dealName);
  if (deal) render("#dealCard", `<a class="deals__product deals__link" href="#cat/${deal.cat}" data-focus="${deal.name}">
      ${deal.img ? `<img class="deals__img" src="${IMG[deal.img]}" alt="${deal.name}" loading="lazy" />` : ""}
      <h3>${deal.name}</h3>
      <p class="price"><b>₦${deal.price.toLocaleString("en-NG")}</b></p>
      <span class="deals__cta">View in ${(categories.find(c => c.slug === deal.cat) || { name: "the shop" }).name} →</span></a>`);
  render("#catGrid", categories.map(c => `
    <a class="cat" href="#cat/${c.slug}">
      <span class="cat__icon" aria-hidden="true">${c.icon}</span>
      <h3>${c.name}</h3><span>${countLabel(c.slug)}</span>
    </a>`).join(""));
  render("#featureGrid", features.map(f => `
    <div class="feature">
      <div class="feature__icon"><svg viewBox="0 0 24 24"><path d="${f.i}"/></svg></div>
      <h3>${f.t}</h3><p>${f.d}</p>
    </div>`).join(""));

  (function intro() {
    const intro = $("#intro"), word = $("#introWord"), slogan = $("#introSlogan");
    let seen = false;
    try { seen = sessionStorage.getItem("pg_intro") === "1"; } catch (e) {}

    const finish = () => {
      intro.classList.add("is-done");
      try { sessionStorage.setItem("pg_intro", "1"); } catch (e) {}
      setTimeout(() => intro.remove(), 800);
    };

    if (seen || reduceMotion) { finish(); return; }

    document.body.style.overflow = "hidden";
    const text = "PRIME GADGET";
    word.innerHTML = [...text].map(ch =>
      ch === " " ? `<span class="space"></span>` : `<span>${ch}</span>`
    ).join("");

    const letters = $$("#introWord span:not(.space)");
    letters.forEach((l, i) => setTimeout(() => l.classList.add("drop"), 120 + i * 90));

    const total = 120 + letters.length * 90 + 700;
    setTimeout(() => slogan.classList.add("show"), total);
    setTimeout(() => { document.body.style.overflow = ""; finish(); }, total + 1400);
  })();

  const nav = $("#nav"), burger = $("#navBurger"), menu = $("#navMenu");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("#navMenu a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open"); burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.14 });
  $$(".reveal").forEach(el => io.observe(el));
  $$(".card, .cat, .feature, .review").forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = (i % 4) * 60 + "ms";
    io.observe(el);
  });

  const WHATSAPP = "2349118153035";
  const naira = (n) => "₦" + Number(n).toLocaleString("en-NG");
  const byName = new Map(catalogue.map(p => [p.name, p]));
  const CART_KEY = "pg-cart-v1";
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem(CART_KEY) || "{}") || {}; } catch (e) { cart = {}; }
  for (const k in cart) if (!byName.has(k) || byName.get(k).price == null || !(cart[k] > 0)) delete cart[k];
  const cartCount = $("#cartCount");
  const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {} };
  const cartItems = () => Object.entries(cart).map(([n, q]) => ({ p: byName.get(n), q }));
  const cartQty = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = () => cartItems().reduce((a, { p, q }) => a + p.price * q, 0);
  function updateBadge() {
    const n = cartQty();
    cartCount.textContent = n > 99 ? "99+" : n;
    cartCount.classList.toggle("show", n > 0);
  }
  let toastTimer;
  function toast(msg) {
    $("#toastMsg").textContent = msg;
    $("#toast").classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2600);
  }
  function setQty(name, q) {
    if (q > 0) cart[name] = Math.min(q, 99); else delete cart[name];
    saveCart(); updateBadge();
    if (document.body.classList.contains("is-cart")) renderCart();
  }
  const esc = (t) => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let order = { name: "", phone: "", zone: "lokoja", address: "", note: "" };
  try { order = Object.assign(order, JSON.parse(localStorage.getItem("pg-cart-form") || "{}")); } catch (e) {}

  function renderCart() {
    setTimeout(() => { const a = $("#waOrder"); if (a) a.href = waUrl(); }, 0);
    const items = cartItems();
    if (!items.length) {
      render("#cartBody", `<div class="cart-empty"><h3>Your cart is empty</h3>
        <p>Browse the shop and tap “Add to cart” on anything you like.</p>
        <a class="btn btn--primary" href="#categories">Start shopping</a></div>`);
      return;
    }
    render("#cartBody", `<div class="cartpage__grid">
      <div class="cart-list">
        ${items.map(({ p, q }) => `
        <div class="cart-line" data-name="${esc(p.name)}">
          ${p.img ? `<img class="cart-line__img" src="${IMG[p.img]}" alt="" />` : `<div class="cart-line__img" aria-hidden="true">📦</div>`}
          <div><div class="cart-line__name">${esc(p.name)}</div><div class="cart-line__unit">${naira(p.price)} each</div></div>
          <div class="cart-line__right">
            <div class="qty"><button type="button" data-q="-1" aria-label="One less">−</button><span>${q}</span><button type="button" data-q="1" aria-label="One more">+</button></div>
            <span class="cart-line__total">${naira(p.price * q)}</span>
            <button class="cart-remove" type="button">Remove</button>
          </div>
        </div>`).join("")}
        <button class="cart-clear" type="button" id="cartClear">Empty cart</button>
      </div>
      <aside class="cart-sum">
        <h3>Order summary</h3>
        <div class="cart-sum__row"><span>Items</span><b>${cartQty()}</b></div>
        <div class="cart-sum__row"><span>Subtotal</span><b>${naira(cartTotal())}</b></div>
        <div class="cart-sum__row"><span>Delivery</span><span>${order.zone === "outside" ? "GIG Logistics, by weight &amp; location" : "Lokoja, confirmed on WhatsApp"}</span></div>
        <div class="cart-sum__row cart-sum__total"><span>Total</span><b>${naira(cartTotal())}</b></div>
        <form class="cart-form" id="cartForm" novalidate>
          <label>Your name<input name="name" autocomplete="name" value="${esc(order.name)}" required /></label>
          <label>Phone number<input name="phone" type="tel" autocomplete="tel" inputmode="tel" value="${esc(order.phone)}" required /></label>
          <fieldset class="cart-zone"><legend>Where should we deliver?</legend>
            <label><input type="radio" name="zone" value="lokoja"${order.zone !== "outside" ? " checked" : ""} /> In Lokoja</label>
            <label><input type="radio" name="zone" value="outside"${order.zone === "outside" ? " checked" : ""} /> Outside Lokoja (GIG)</label>
          </fieldset>
          <label>${order.zone === "outside" ? "Your state, city and full address (or nearest GIG office)" : "Delivery address in Lokoja"}<input name="address" autocomplete="street-address" value="${esc(order.address)}" required /></label>
          <label>Note (optional)<textarea name="note" placeholder="Colour, pick-up time, anything else">${esc(order.note)}</textarea></label>
          <p class="cart-err" id="cartErr" role="alert"></p>
          <a class="btn btn--primary" id="waOrder" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">Order on WhatsApp</a>
        </form>
        <p class="cart-sum__note">Nothing is paid on this site. Your order opens in WhatsApp, we confirm stock and the delivery fee, and you pay before we dispatch.</p>
      </aside>
    </div>`);
  }

  function orderText() {
    const lines = cartItems().map(({ p, q }, i) => `${i + 1}. ${p.name} x${q} = ${naira(p.price * q)}`);
    return [
      "Hello Prime Gadget, I'd like to order:", "", ...lines, "",
      `Total: ${naira(cartTotal())} (plus delivery, to be confirmed)`, "",
      `Delivery: ${order.zone === "outside" ? "Outside Lokoja (GIG Logistics)" : "Within Lokoja"}`, "",
      `Name: ${order.name}`, `Phone: ${order.phone}`, `Address: ${order.address}`,
      ...(order.note ? [`Note: ${order.note}`] : []),
    ].join("\n");
  }

  document.addEventListener("click", (e) => {
    const add = e.target.closest(".add-btn");
    if (add) {
      const p = byName.get(add.dataset.name);
      if (!p) return;
      setQty(p.name, (cart[p.name] || 0) + 1);
      add.textContent = "Added ✓";
      setTimeout(() => (add.textContent = "Add to cart"), 1100);
      toast(`${p.name.length > 38 ? p.name.slice(0, 36) + "…" : p.name} added`);
    }
    const wish = e.target.closest(".wish");
    if (wish) wish.classList.toggle("active");
    const line = e.target.closest(".cart-line");
    if (line) {
      const n = line.dataset.name;
      const step = e.target.closest("[data-q]");
      if (step) setQty(n, (cart[n] || 0) + Number(step.dataset.q));
      if (e.target.closest(".cart-remove")) setQty(n, 0);
    }
    if (e.target.closest("#cartClear") && confirm("Remove everything from your cart?")) { cart = {}; setQty("", 0); }
    if (e.target.closest("#cartBtn")) location.hash = "#cart";
  });
  document.addEventListener("input", (e) => {
    if (!e.target.closest("#cartForm")) return;
    order[e.target.name] = e.target.value;
    try { localStorage.setItem("pg-cart-form", JSON.stringify(order)); } catch (err) {}
    if (e.target.name === "zone") renderCart();
  });
  const waUrl = () => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(orderText())}`;
  function syncWaLink() { const a = $("#waOrder"); if (a) a.href = waUrl(); }
  function missingFields() {
    const miss = ["name", "phone", "address"].filter(k => !String(order[k] || "").trim());
    if (miss.length) {
      $("#cartErr").textContent = "Please add your " + miss.map(k => ({ name: "name", phone: "phone number", address: "delivery address" }[k])).join(", ") + ".";
      const el = $(`#cartForm [name=${miss[0]}]`); if (el) el.focus();
    } else $("#cartErr").textContent = "";
    return miss.length > 0;
  }
  document.addEventListener("input", (e) => { if (e.target.closest("#cartForm")) syncWaLink(); });
  document.addEventListener("click", (e) => {
    const a = e.target.closest("#waOrder");
    if (!a) return;
    syncWaLink();
    if (missingFields()) e.preventDefault();
  });
  document.addEventListener("submit", (e) => {
    if (!e.target.closest("#cartForm")) return;
    e.preventDefault();
    if (!missingFields()) $("#waOrder").click();
  });
  updateBadge();

  function showCategory(c) {
    $("#catEyebrow").textContent = "Shop · " + c.name;
    $("#catTitle").textContent = c.name;
    $("#catLead").textContent = c.lead;
    render("#catTabs", categories.map(o =>
      `<a href="#cat/${o.slug}"${o.slug === c.slug ? ' aria-current="page"' : ""}>${o.name}</a>`
    ).join(""));
    const items = inCat(c.slug);
    const section = (title, list, emptyText) => `
      <section class="brandsec">
        <div class="brandsec__head"><h3>${title}</h3><span>${list.length ? list.length + " item" + (list.length > 1 ? "s" : "") : "Coming soon"}</span></div>
        ${list.length
          ? `<div class="product-grid">${list.map(productCard).join("")}</div>`
          : `<p class="brandsec__empty">${emptyText}</p>`}
      </section>`;
    const lower = c.name.toLowerCase();
    const others = items.filter(p => !brands.some(b => b.slug === p.brand));
    render("#catBody",
      brands.filter(b => (b.always && c.slug !== "cases") || items.some(p => p.brand === b.slug)).map(b => section(`${b.name} ${c.name}`, items.filter(p => p.brand === b.slug),
        `No ${b.name} ${lower} in stock yet. Check back soon.`)).join("") +
      (others.length ? section(`More ${lower}`, others, "") : ""));
    document.title = c.name + " | Prime Gadget";
  }

  const norm = (t) => String(t).toLowerCase().replace(/[^a-z0-9₦]+/g, " ");
  const haystack = new Map(catalogue.map(p => [p, norm([p.name, p.brand, (categories.find(c => c.slug === p.cat) || {}).name, (p.features || []).join(" ")].join(" "))]));
  function runSearch() {
    const q = norm($("#searchInput").value).trim();
    if (!q) { $("#searchCount").textContent = "Type a product name, brand or model number."; render("#searchGrid", ""); return; }
    const words = q.split(" ");
    const hits = catalogue.filter(p => words.every(w => haystack.get(p).includes(w)))
      .sort((a, b) => (b.price != null) - (a.price != null));
    $("#searchCount").textContent = hits.length
      ? `${hits.length} product${hits.length > 1 ? "s" : ""} found`
      : "Nothing found. Try a shorter word, or ask us on WhatsApp.";
    render("#searchGrid", hits.slice(0, 60).map(p => productCard(p, true)).join(""));
  }
  $("#searchInput").addEventListener("input", runSearch);
  $("#searchBtn").addEventListener("click", () => { location.hash = "#search"; });
  const sc = $("#statCount"); if (sc) sc.textContent = catalogue.length;
  const homeTitle = document.title;
  let pendingFocus = null;
  document.addEventListener("click", (e) => {
    const l = e.target.closest("[data-focus]");
    if (l) pendingFocus = l.dataset.focus;
  }, true);
  function route() {
    const m = location.hash.match(/^#cat\/([\w-]+)/);
    const c = m && categories.find(o => o.slug === m[1]);
    document.body.classList.toggle("is-cat", !!c);
    const isSearch = location.hash === "#search";
    document.body.classList.toggle("is-search", isSearch);
    if (isSearch) { document.body.classList.remove("is-cart"); runSearch(); document.title = "Search | Prime Gadget"; window.scrollTo(0, 0); setTimeout(() => $("#searchInput").focus(), 50); return; }
    const isCart = location.hash === "#cart";
    document.body.classList.toggle("is-cart", isCart);
    if (isCart) { renderCart(); document.title = "Cart | Prime Gadget"; window.scrollTo(0, 0); return; }
    if (c) {
      showCategory(c);
      const want = pendingFocus; pendingFocus = null;
      const card = want && $$("#catView .card").find(el => el.querySelector(".card__name")?.textContent === want);
      if (card) {
        card.scrollIntoView({ block: "center" });
        card.classList.add("card--flash");
        setTimeout(() => card.classList.remove("card--flash"), 2200);
      } else window.scrollTo(0, 0);
      return;
    }
    document.title = homeTitle;
    const target = location.hash.length > 1 && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
  window.addEventListener("hashchange", route);
  if (location.hash.startsWith("#cat/") || location.hash === "#cart" || location.hash === "#search") route();

})();
