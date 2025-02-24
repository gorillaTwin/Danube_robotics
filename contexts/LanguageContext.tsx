"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

type Language = "en" | "srb"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage === "en" || storedLanguage === "srb") {
      setLanguage(storedLanguage)
    }
  }, [])

  const translations: Record<Language, Record<string, string>> = {
    en: {
      about: "About us",
      product: "Product",
      software: "Software",
      contact: "Contact",
      "home.title": "MILI",
      "home.description":
        "Our main product is MILI, an autonomous robot designed for charging electric vehicles in parking lots. The robot is equipped with advanced sensors for navigation and collision avoidance, along with a built-in charging system and battery storage.",
      "home.image.caption": "EVAR Robot in Action",
      "home.additional":
        "MILI can operate 24/7, moving between parked vehicles to provide charging services on demand. Its compact design allows it to navigate tight spaces, while its robust construction ensures reliability in various weather conditions.",
      "about.title": "About us",
      "about.description":
        "Danube robotics makes robots for charging electric vehicles. It is currently working on MILI, a robot for charging electric cars at parking lots. Adding an electric charger at every parking spot is expensive. It is just easier to let a robot roam and charge cars in the parking lot. Once demand rises, another robot is added to the parking lot without a need for electrical layout or permitting. We aim to help expand available infrastructure for drivers. As this is one of the largest reasons why people hesitate to buy an EV.",
      "about.mission.title": "MISSION",
      "about.mission.subtitle": "Make EV charging cheap and convenient",
      "about.mission.description":
        "Make it possible to find a charger anywhere by making it easy to install EV chargers almost anywhere. Reduce installing costs, permitting cost and additional requirements so that charging is as cheap as possible.",
      "about.hardware": "Hardware",
      "about.hardware.description":
        "The charger has sensors so it avoids collisions. On it, it has a charger and batteries.",
      "about.software": "Software",
      "about.software.description":
        "Software covers payments and navigation of the robot. Users can order charging over the app.",
      "about.autonomy": "Autonomy",
      "about.autonomy.description": "The robot is autonomous. It handles obstacles and stops on time.",
      "product.title": "Product",
      "product.description":
        "Our main product is MILI, an autonomous robot designed for charging electric vehicles in parking lots. The robot is equipped with advanced sensors for navigation and collision avoidance, along with a built-in charging system and battery storage.",
      "product.image.caption": "EVAR, a similar Robot to ours in Action",
      "product.additional":
        "MILI can operate 24/7, moving between parked vehicles to provide charging services on demand. Its compact design allows it to navigate tight spaces, while its robust construction ensures reliability in various weather conditions.",
      "software.title": "Software",
      "software.description":
        "Our software platform manages the entire charging ecosystem. It includes a user-friendly mobile app for customers to request charging services and monitor their charging status, as well as a sophisticated backend system for robot navigation and fleet management.",
      "software.video.caption": "Watch a similar Autonomous Charging Robot in Action",
      "software.additional":
        "The system handles payment processing, scheduling, and real-time tracking of charging robots. Our AI-powered navigation ensures efficient pathfinding and optimal charging routes throughout the parking facility.",
      "software.features": "Our software handles:",
      "software.feature1": "Navigation and robot control",
      "software.feature2": "Server side logic connected to the web app for payment and user management handling",
      "software.feature3": "Mobile app for robot positioning on the parking lot and payment processing",
      "contact.title": "Contact us!",
      "contact.address": "ADDRESS",
      "contact.address.content": "Belgrade 11000\nSerbia",
      "contact.email": "EMAIL",
      "contact.tel": "TEL",
      faq: "FAQ",
      "faq.title": "Frequently Asked Questions",
      "faq.q1": "What is MILI?",
      "faq.a1":
        "MILI is an autonomous robot designed for charging electric vehicles in parking lots. It's equipped with advanced sensors for navigation and collision avoidance, along with a built-in charging system and battery storage.",
      "faq.q2": "How does MILI work?",
      "faq.a2":
        "MILI operates 24/7, moving between parked vehicles to provide charging services on demand. Its compact design allows it to navigate tight spaces, while its robust construction ensures reliability in various weather conditions.",
      "faq.q3": "What are the benefits of using MILI?",
      "faq.a3":
        "MILI makes EV charging more accessible and cost-effective. It eliminates the need for fixed charging stations at every parking spot, reduces installation and permitting costs, and can easily scale with demand.",
      "faq.q4": "Is MILI safe to use in a parking lot with people and cars?",
      "faq.a4":
        "Yes, MILI is designed with safety as a top priority. It uses advanced sensors and AI to navigate safely around people and vehicles, avoiding collisions and stopping when necessary.",
      "faq.q5": "How can I request MILI to charge my car?",
      "faq.a5":
        "Users can request charging services through our mobile app. The app allows you to locate MILI, schedule charging, and monitor the charging status of your vehicle.",
      specifications: "Specifications",
    },
    srb: {
      about: "O nama",
      product: "Ppoizvod",
      software: "Softver",
      contact: "Kontakt",
      "home.title": "MILI",
      "home.description":
        "Naš glavni proizvod je MILI, autonomni robot dizajniran za punjenje električnih vozila na parkiralištima. Robot je opremljen naprednim senzorima za navigaciju i izbegavanje sudara, zajedno sa ugrađenim sistemom za punjenje i skladištenjem baterija.",
      "home.image.caption": "MILI Robot u akciji",
      "home.additional":
        "MILI može da radi 24/7, krećući se između parkiranih vozila kako bi pružio usluge punjenja na zahtev. Njegov kompaktan dizajn mu omogućava da se kreće u uskim prostorima, dok njegova robusna konstrukcija osigurava pouzdanost u različitim vremenskim uslovima.",
      "about.title": "O nama",
      "about.description":
        "Danube robotics pravi robote za punjenje električnih vozila. Trenutno radi na MILI-ju, robotu za punjenje električnih automobila na parkiralištima. Dodavanje električnog punjača na svako parking mesto je skupo. Mnogo je lakše pustiti robota da se kreće i puni automobile na parkingu. Kada potražnja poraste, još jedan robot se dodaje na parking bez potrebe za električnim instalacijama ili dozvolama. Cilj nam je da pomognemo u proširenju dostupne infrastrukture za vozače. Ovo je jedan od najvećih razloga zašto ljudi oklevaju da kupe električno vozilo.",
      "about.mission.title": "MISIJA",
      "about.mission.subtitle": "Učiniti punjenje EV jeftinim i pogodnim",
      "about.mission.description":
        "Omogućiti pronalaženje punjača bilo gde tako što će se olakšati instalacija EV punjača skoro svuda. Smanjiti troškove instalacije, troškove dozvola i dodatne zahteve kako bi punjenje bilo što jeftinije.",
      "about.hardware": "Hardver",
      "about.hardware.description": "Punjač ima senzore tako da izbegava sudare. Na sebi ima punjač i baterije.",
      "about.software": "Softver",
      "about.software.description":
        "Softver pokriva plaćanja i navigaciju robota. Korisnici mogu naručiti punjenje preko aplikacije.",
      "about.autonomy": "Autonomija",
      "about.autonomy.description": "Robot je autonoman. Upravlja preprekama i zaustavlja se na vreme.",
      "product.title": "Proizvod",
      "product.description":
        "Naš glavni proizvod je MILI, autonomni robot dizajniran za punjenje električnih vozila na parkiralištima. Robot je opremljen naprednim senzorima za navigaciju i izbegavanje sudara, zajedno sa ugrađenim sistemom za punjenje i skladištenjem baterija.",
      "product.image.caption": "MILI Robot u akciji",
      "product.additional":
        "MILI može da radi 24/7, krećući se između parkiranih vozila kako bi pružio usluge punjenja na zahtev. Njegov kompaktan dizajn mu omogućava da se kreće u uskim prostorima, dok njegova robusna konstrukcija osigurava pouzdanost u različitim vremenskim uslovima.",
      "software.title": "Softver",
      "software.description":
        "Naša softverska platforma upravlja celim ekosistemom punjenja. Uključuje aplikaciju za mobilne uređaje prilagođenu korisnicima za zahtevanje usluga punjenja i praćenje statusa punjenja, kao i sofisticirani backend sistem za navigaciju robota i upravljanje flotom.",
      "software.video.caption": "Pogledajte jednog takvog autonomnog robota za punjenje u akciji",
      "software.additional":
        "Sistem upravlja obradom plaćanja, zakazivanjem i praćenjem robota za punjenje u realnom vremenu. Naša AI-pogonjena navigacija osigurava efikasno pronalaženje putanja i optimalne rute punjenja kroz parking objekat.",
      "software.features": "Naš softver upravlja:",
      "software.feature1": "Navigacijom i kontrolom robota",
      "software.feature2":
        "Serverskom logikom povezanom sa web aplikacijom za obradu plaćanja i upravljanje korisnicima",
      "software.feature3": "Mobilnom aplikacijom za pozicioniranje robota na parkingu i obradu plaćanja",
      "contact.title": "Kontaktirajte nas!",
      "contact.address": "ADRESA",
      "contact.address.content": "Beograd 11000\nSrbija",
      "contact.email": "E-POŠTA",
      "contact.tel": "TELEFON",
      faq: "ČPP",
      "faq.title": "Često Postavljana Pitanja",
      "faq.q1": "Šta je MILI?",
      "faq.a1":
        "MILI je autonomni robot dizajniran za punjenje električnih vozila na parkiralištima. Opremljen je naprednim senzorima za navigaciju i izbegavanje sudara, zajedno sa ugrađenim sistemom za punjenje i skladištenjem baterija.",
      "faq.q2": "Kako MILI funkcioniše?",
      "faq.a2":
        "MILI radi 24/7, krećući se između parkiranih vozila kako bi pružio usluge punjenja na zahtev. Njegov kompaktan dizajn mu omogućava da se kreće u uskim prostorima, dok njegova robusna konstrukcija osigurava pouzdanost u različitim vremenskim uslovima.",
      "faq.q3": "Koje su prednosti korišćenja MILI-ja?",
      "faq.a3":
        "MILI čini punjenje električnih vozila pristupačnijim i isplativijim. Eliminiše potrebu za fiksnim stanicama za punjenje na svakom parking mestu, smanjuje troškove instalacije i dozvola, i lako se prilagođava potražnji.",
      "faq.q4": "Da li je MILI bezbedan za upotrebu na parkingu sa ljudima i automobilima?",
      "faq.a4":
        "Da, MILI je dizajniran sa bezbednošću kao glavnim prioritetom. Koristi napredne senzore i veštačku inteligenciju za sigurnu navigaciju oko ljudi i vozila, izbegavajući sudare i zaustavljajući se kada je to potrebno.",
      "faq.q5": "Kako mogu da zatražim od MILI-ja da napuni moj automobil?",
      "faq.a5":
        "Korisnici mogu zatražiti usluge punjenja putem naše mobilne aplikacije. Aplikacija vam omogućava da locirate MILI-ja, zakažete punjenje i pratite status punjenja vašeg vozila.",
      specifications: "Specifikacije",
    },
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

