const PRODUCTS = {

    /* ---------------------- OTT APPS ---------------------- */

    netflix: {
        name: "Netflix Premium (1 Device)",
        price: "₹149 / Month",
        img: "/uploads/netflix.png",
        description: "Netflix Premium Full HD streaming for 1 private device. Instant activation.",
        features: [
            "1 Month Access",
            "1 Device Only",
            "Full HD 1080p",
            "Private Login",
            "Instant Activation",
            "No Lag • No Sharing",
            "Movies + Web Series",
            "Support 7AM–11PM"
        ]
    },

    primevideo: {
        name: "Prime Video Subscription",
        price: "₹99 / Month",
        img: "/uploads/primevideo.png",
        description: "Prime Video private login on 1 device with HD streaming.",
        features: [
            "1 Month Access",
            "1 Device Only",
            "HD / Full HD",
            "Prime Originals",
            "Instant Activation",
            "Movies + Web Series",
            "100% Secure Login"
        ]
    },

    sonyliv: {
        name: "Sony LIV Premium",
        price: "₹79 / Month",
        img: "/uploads/sonyliv.png",
        description: "Sony LIV premium plan with all shows + sports unlocked.",
        features: [
            "1 Month Access",
            "1 Device Only",
            "Full HD Quality",
            "Sports + TV Shows",
            "Instant Activation"
        ]
    },

    hotstar: {
        name: "Hotstar Super Plan",
        price: "₹70 / Month",
        img: "/uploads/JioHotstar.png",
        description: "Hotstar Super Full HD plan for 1 device.",
        features: [
            "1 Month Access",
            "1 Device Only",
            "Full HD 1080p",
            "Instant Activation",
            "Sports + Movies + TV",
            "Private Login"
        ]
    },

    zee5: {
        name: "ZEE5 Premium",
        price: "₹59 / Month",
        img: "/uploads/zee5.png",
        description: "Zee5 Premium plan with HD streaming on 1 device.",
        features: [
            "1 Month Access",
            "1 Device Only",
            "HD Streaming",
            "Private Login",
            "Instant Activation"
        ]
    },

    youtube: {
        name: "YouTube Premium",
        price: "₹49 / Month",
        img: "/uploads/YouTubePremium.png",
        description: "Ad-free YouTube + background play + downloads.",
        features: [
            "1 Month Access",
            "Ad-Free Videos",
            "Background Play",
            "Offline Downloads",
            "YouTube Music Included"
        ]
    },

    spotify: {
        name: "Spotify Premium",
        price: "₹39 / Month",
        img: "/uploads/spotify.png",
        description: "Spotify premium private plan for offline + no ads.",
        features: [
            "1 Month Access",
            "Offline Download",
            "Ad-Free Music",
            "Unlimited Skips",
            "Private Login"
        ]
    },

    amazonmusic: {
        name: "Amazon Music HD",
        price: "₹49 / Month",
        img: "/uploads/amazonmusic.png",
        description: "Amazon Music HD plan for premium audio quality.",
        features: [
            "HD Audio",
            "Offline Download",
            "Ad-Free",
            "Private Login"
        ]
    },

    voot: {
        name: "Voot Select",
        price: "₹29 / Month",
        img: "/uploads/voot.png",
        description: "Voot Select premium for movies + colors tv content.",
        features: [
            "1 Month Access",
            "Ad-Free",
            "HD Streaming"
        ]
    },

    aha: {
        name: "Aha Premium",
        price: "₹39 / Month",
        img: "/uploads/aha.png",
        description: "Aha Telugu OTT premium plan.",
        features: [
            "Telugu Content",
            "Full HD",
            "Movies + Web Series"
        ]
    },

    /* ---------------------- COURSES ---------------------- */

    coursera: {
        name: "Coursera Plus 2025",
        price: "₹99 Only",
        img: "/uploads/CourseraPlus.png",
        description: "Premium Coursera Plus access 2025 with certificates.",
        features: [
            "Certificates Included",
            "Study Material",
            "Lifetime Access",
            "Projects + Exams",
            "Beginner to Advanced",
            "Updated 2025 Version"
        ]
    },

    udemy: {
        name: "Udemy Mega Course Pack",
        price: "₹79 Only",
        img: "/uploads/udemy.png",
        description: "Complete Udemy premium courses bundle.",
        features: [
            "100+ Premium Courses",
            "Coding + Editing + Marketing",
            "Lifetime Access",
            "Projects Included"
        ]
    },

    codingninja: {
        name: "Coding Ninjas Full Bootcamp",
        price: "₹129 Only",
        img: "/uploads/codingninja.png",
        description: "Full coding bootcamp with DSA + Web Dev + Notes.",
        features: [
            "DSA Course",
            "Web Development",
            "450+ Coding Problems",
            "Certificates Included"
        ]
    },

    physicswallah: {
        name: "Physics Wallah Full Premium Library",
        price: "₹99 Only",
        img: "/uploads/pw.png",
        description: "PW complete premium lectures, PDFs and exams.",
        features: [
            "JEE + NEET Content",
            "Handwritten Notes",
            "Video Lectures",
            "Test Series"
        ]
    },

    illustrator: {
        name: "Illustrator Mastery Course",
        price: "₹79 Only",
        img: "/uploads/illustrator.png",
        description: "Learn Adobe Illustrator from beginner to expert.",
        features: [
            "Premium Templates",
            "Lifetime Access",
            "Updated 2025 Version"
        ]
    },

    photoshop: {
        name: "Photoshop Editing Course",
        price: "₹89 Only",
        img: "/uploads/photoshop.png",
        description: "Master professional photo editing step-by-step.",
        features: [
            "Project Files Included",
            "Photo Retouching",
            "Lifetime Access"
        ]
    },

    canva: {
        name: "Canva Pro Masterclass",
        price: "₹59 Only",
        img: "/uploads/canava.png",
        description: "Canva Pro editing, Instagram, branding, templates.",
        features: [
            "Business Branding",
            "Templates Included",
            "Beginner Friendly"
        ]
    },

    freelancing: {
        name: "Freelancing Masterclass",
        price: "₹69 Only",
        img: "/uploads/Course3.png",
        description: "Learn Fiverr + Upwork + Instagram freelancing.",
        features: [
            "Case Studies",
            "Client Handling",
            "Portfolio Building"
        ]
    },

    videomaster: {
        name: "Video Editing Masterclass",
        price: "₹79 Only",
        img: "/uploads/Course2.png",
        description: "Complete video editing course from beginner to pro.",
        features: [
            "Capcut + Premiere + AE",
            "Projects Included",
            "Lifetime Access"
        ]
    },

    /* ---------------------- EDITING TOOLS ---------------------- */

    capcut: {
        name: "CapCut Pro Templates Pack",
        price: "₹39 Only",
        img: "/uploads/Capcut.png",
        description: "5000+ HD CapCut templates for reels + edits.",
        features: [
            "5000+ Templates",
            "Transitions + Effects",
            "Lifetime Access"
        ]
    },

    premiere: {
        name: "Premiere Pro Presets",
        price: "₹49 Only",
        img: "/uploads/premiere-pro.png",
        description: "Color grading + transitions + effects bundle.",
        features: [
            "Cinematic LUTs",
            "Transitions Pack",
            "Drag & Drop"
        ]
    },

    ae: {
        name: "After Effects Mega Pack",
        price: "₹59 Only",
        img: "/uploads/AE.png",
        description: "Logo reveals + motion graphics + slideshows.",
        features: [
            "Motion Graphics",
            "Kinetic Typography",
            "Slideshow Pack"
        ]
    },

    filmora: {
        name: "Filmora Premium Plugins",
        price: "₹49 Only",
        img: "/uploads/Filmora.png",
        description: "Filmora transitions, effects and LUT files.",
        features: [
            "Effects Pack",
            "Transitions + Filters",
            "Easy Install"
        ]
    },

    canvatemplates: {
        name: "Canva Templates Bundle",
        price: "₹39 Only",
        img: "/uploads/canava.png",
        description: "Editable templates for Instagram + branding.",
        features: [
            "1000+ Templates",
            "Business Branding",
            "Reels + Posters"
        ]
    },

    picsart: {
        name: "PicsArt Editing Kit",
        price: "₹29 Only",
        img: "/uploads/picsart.png",
        description: "HD backgrounds, overlays & filters.",
        features: [
            "HD Backgrounds",
            "Overlay Pack",
            "Filter Presets"
        ]
    }
};
