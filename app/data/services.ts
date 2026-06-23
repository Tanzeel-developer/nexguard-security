import {
  Building2,
  ShieldCheck,
  Users,
  Siren,
  Store,
  BellRing,
  Briefcase,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  image: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTagline: string;
  intro: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "construction-site-security",
    title: "Construction Site Security",
    shortDesc: "Protect your sites, equipment and workforce from theft and unauthorised access.",
    icon: Building2,
    image: "/Construction Site Security.jpeg",
    seoTitle: "Construction Site Security Perth | NexGuard Protection",
    metaDescription:
      "Professional construction site security guards in Perth. Protect equipment, materials and workforce from theft and vandalism with licensed WA security guards. Get a free quote today.",
    keywords: [
      "construction site security Perth",
      "construction security guards WA",
      "building site security Perth",
      "site security services Western Australia",
    ],
    heroTagline: "Construction Site Security Perth",
    intro: [
      "Construction sites across Perth are prime targets for theft, vandalism and unauthorised access — particularly overnight and on weekends when sites sit unattended. NexGuard Protection provides licensed, professional construction site security guards across Perth and Western Australia, giving builders, developers and site managers the peace of mind that their equipment, materials and workforce are protected around the clock.",
      "From small residential builds to large-scale commercial developments, our construction security guards are trained to manage site access, conduct regular patrols, monitor for hazards, and respond immediately to any incident. We work closely with site supervisors to develop a tailored security plan that fits your project timeline, budget and risk profile.",
    ],
    benefits: [
      { title: "Theft & Vandalism Prevention", desc: "Visible, professional guards significantly reduce theft of tools, machinery and building materials." },
      { title: "Access Control", desc: "We manage who enters and exits your site, keeping unauthorised visitors and trespassers out." },
      { title: "After-Hours Protection", desc: "Most construction site incidents happen overnight — we provide guards and patrols when your site is most vulnerable." },
      { title: "Incident Reporting", desc: "Detailed digital incident reports after every shift, so you always know exactly what happened on-site." },
      { title: "WA Licensed Guards", desc: "Every guard holds a current Western Australian security licence and has been police checked." },
      { title: "Flexible Scheduling", desc: "Static guards, mobile patrols, or a combination — built around your site's specific risk windows." },
    ],
    process: [
      { step: "Site Assessment", desc: "We visit your site to assess vulnerabilities, access points and identify the right security approach." },
      { step: "Custom Security Plan", desc: "A tailored plan is built around your project timeline, budget and specific risks." },
      { step: "Guard Deployment", desc: "Licensed, vetted security guards are deployed to your site on the agreed schedule." },
      { step: "Ongoing Reporting", desc: "Regular digital reports and direct communication with your site management team." },
    ],
    faqs: [
      { q: "How much does construction site security cost in Perth?", a: "Costs vary depending on site size, shift length and whether you need static guards, mobile patrols, or both. Contact us for a free, no-obligation quote tailored to your project." },
      { q: "Can you provide overnight-only security?", a: "Yes. Many of our construction clients only require coverage overnight and on weekends — we build a schedule around exactly when your site is most at risk." },
      { q: "Are your guards licensed in Western Australia?", a: "Yes, every NexGuard guard holds a current WA security licence and has been police checked before deployment." },
      { q: "Do you cover sites outside Perth CBD?", a: "Yes, we service the entire Perth metro area and regional Western Australia." },
    ],
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Patrols",
    shortDesc: "Visible deterrence with random or scheduled patrols to keep your property secure around the clock.",
    icon: ShieldCheck,
    image: "/Mobile Patrols.jpeg",
    seoTitle: "Mobile Patrol Security Perth | NexGuard Protection",
    metaDescription:
      "Professional mobile security patrol services across Perth and WA. Random or scheduled patrols for commercial, industrial and residential properties. 24/7 availability — get a free quote.",
    keywords: [
      "mobile patrol security Perth",
      "mobile security patrols WA",
      "security patrol services Perth",
      "random patrol security Western Australia",
    ],
    heroTagline: "Mobile Patrol Security Perth",
    intro: [
      "A visible, unpredictable security presence is one of the most effective deterrents against break-ins, vandalism and trespassing. NexGuard Protection's mobile patrol service provides marked patrol vehicles conducting random or scheduled checks across Perth and Western Australia — covering commercial premises, construction sites, retail centres, industrial estates and residential complexes.",
      "Our patrol officers don't just drive past — every visit includes a full perimeter check, lock and access point inspection, and a written report. Because patrol times are randomised, would-be intruders can never predict when a guard will arrive, making mobile patrols one of the most cost-effective security solutions available.",
    ],
    benefits: [
      { title: "Cost-Effective Coverage", desc: "Protect multiple properties or a large site without the cost of a full-time static guard." },
      { title: "Unpredictable Timing", desc: "Randomised patrol schedules make it impossible for intruders to predict guard movements." },
      { title: "Rapid Incident Response", desc: "Patrol vehicles can be redirected immediately if an alarm or incident is reported nearby." },
      { title: "Full Perimeter Checks", desc: "Every patrol includes a thorough check of doors, windows, gates and access points." },
      { title: "Marked Patrol Vehicles", desc: "Visible branded vehicles act as a strong deterrent on their own." },
      { title: "Detailed Patrol Logs", desc: "Time-stamped reports for every visit, giving you full transparency and accountability." },
    ],
    process: [
      { step: "Property Review", desc: "We assess your property layout and identify key checkpoints." },
      { step: "Patrol Schedule Design", desc: "Random or fixed-interval patrol times are set based on your risk profile." },
      { step: "Active Patrolling", desc: "Marked vehicles conduct thorough checks at each scheduled visit." },
      { step: "Reporting", desc: "You receive a log of every patrol with time, findings and any action taken." },
    ],
    faqs: [
      { q: "How often do mobile patrols visit a property?", a: "This is fully customisable — from several checks per night to multiple patrols per hour for higher-risk sites." },
      { q: "Can patrols respond to a triggered alarm?", a: "Yes, our patrol vehicles can be dispatched immediately when an alarm is triggered, often arriving faster than a standalone alarm response service." },
      { q: "Do you patrol residential strata and apartment complexes?", a: "Yes, mobile patrols are popular with strata and residential complexes across Perth looking for cost-effective, visible security." },
      { q: "What areas of WA do you patrol?", a: "We cover Perth metro and surrounding regional Western Australia — see our full service area list on the contact page." },
    ],
  },
  {
    slug: "static-guards",
    title: "Static Guards",
    shortDesc: "Professional on-site guards providing access control, monitoring and a visible security presence.",
    icon: Users,
    image: "/staticguards.jpg",
    seoTitle: "Static Security Guards Perth | NexGuard Protection",
    metaDescription:
      "On-site static security guards for businesses across Perth WA. Access control, monitoring and a constant visible presence. Fully licensed and police checked. Request a free quote.",
    keywords: [
      "static security guards Perth",
      "on-site security guards WA",
      "static guard services Perth",
      "front of house security Western Australia",
    ],
    heroTagline: "Static Security Guards Perth",
    intro: [
      "Some properties and sites require more than periodic checks — they need a constant, visible security presence. NexGuard Protection's static guard service places a dedicated, licensed security officer on-site for the duration of your required hours, providing access control, continuous monitoring, and immediate response to any incident.",
      "Our static guards are widely used across Perth by office buildings, warehouses, retail premises, residential complexes and industrial sites that need a trained professional permanently stationed at entry points or throughout the property. Every guard is fully briefed on your site-specific protocols before their first shift.",
    ],
    benefits: [
      { title: "Constant Visible Presence", desc: "A stationed guard is the strongest possible deterrent against theft, trespassing and disorderly behaviour." },
      { title: "Access Control", desc: "Guards manage entry and exit, checking credentials and maintaining visitor logs." },
      { title: "Immediate Response", desc: "Being on-site means incidents are addressed the moment they happen, not after a delay." },
      { title: "Site-Specific Training", desc: "Every guard is briefed on your property's specific procedures, emergency plans and points of contact." },
      { title: "Professional Presentation", desc: "Guards in branded NexGuard uniform present a professional, reassuring image to staff and visitors." },
      { title: "Flexible Shift Lengths", desc: "From single shifts to full 24/7 rostered coverage, tailored to your needs." },
    ],
    process: [
      { step: "Site Briefing", desc: "We learn your site's layout, protocols, and specific security priorities." },
      { step: "Guard Assignment", desc: "A suitable, trained guard is matched and briefed for your site." },
      { step: "On-Site Deployment", desc: "Your guard arrives in full uniform and begins coverage on schedule." },
      { step: "Ongoing Communication", desc: "Direct contact with your guard and management team throughout the engagement." },
    ],
    faqs: [
      { q: "What's the difference between static guards and mobile patrols?", a: "A static guard is permanently stationed on your site for the full shift, while mobile patrols visit multiple sites with periodic checks. Static guards suit sites needing constant presence and access control." },
      { q: "Can I request the same guard for ongoing shifts?", a: "Yes, where possible we keep the same guard assigned to your site so they build familiarity with your property and team." },
      { q: "Do static guards carry out access control duties?", a: "Yes, managing entry, checking credentials and maintaining visitor logs is a core part of the static guard role." },
      { q: "Is 24/7 static coverage available?", a: "Yes, we can roster guards across a full 24/7 schedule for sites that require continuous coverage." },
    ],
  },
  {
    slug: "event-security-crowd-control",
    title: "Event Security & Crowd Control",
    shortDesc: "Crowd management, access control and safety planning for events of any scale across Perth.",
    icon: Siren,
    image: "/Event Security & Crowd Control.jpeg",
    seoTitle: "Event Security & Crowd Control Perth | NexGuard Protection",
    metaDescription:
      "Professional event security and crowd control services in Perth WA. Licensed guards for festivals, concerts, corporate events and private functions. Get a free quote today.",
    keywords: [
      "event security Perth",
      "crowd control security WA",
      "event security guards Perth",
      "festival security Western Australia",
    ],
    heroTagline: "Event Security & Crowd Control Perth",
    intro: [
      "From corporate functions to large-scale public festivals, every event has unique security and crowd management needs. NexGuard Protection provides experienced event security and crowd control teams across Perth, managing entry points, monitoring crowd behaviour, and ensuring guest safety from setup through to pack-down.",
      "Our event security officers are trained in crowd psychology, conflict de-escalation and emergency evacuation procedures, working closely with event organisers to develop a safety plan suited to the venue, guest numbers and nature of the event.",
    ],
    benefits: [
      { title: "Crowd Management Expertise", desc: "Trained to manage queues, entry flow and crowd density to keep events safe and orderly." },
      { title: "Access & Ticket Control", desc: "Guards manage entry points, wristbands and ticket validation to prevent gatecrashing." },
      { title: "Conflict De-escalation", desc: "Trained to identify and defuse tension before it escalates into a serious incident." },
      { title: "Emergency Response Planning", desc: "We work with organisers on evacuation routes and emergency procedures ahead of the event." },
      { title: "Scalable Teams", desc: "From a handful of guards for a private function to large coordinated teams for major events." },
      { title: "Licensed & Experienced", desc: "All event security staff hold current WA licences with relevant crowd control endorsements." },
    ],
    process: [
      { step: "Event Consultation", desc: "We discuss your event size, venue, guest profile and any specific risks." },
      { step: "Security Plan", desc: "A tailored crowd control and access plan is developed for your event." },
      { step: "Team Briefing", desc: "All assigned guards are briefed on the venue layout and event-specific protocols." },
      { step: "On-the-Day Coverage", desc: "Our team manages entry, crowd flow and incident response throughout the event." },
    ],
    faqs: [
      { q: "How many security guards do I need for my event?", a: "This depends on guest numbers, venue layout and event type. We provide a recommended guard count as part of your free consultation." },
      { q: "Do you provide security for private parties as well as public events?", a: "Yes — see our dedicated Private Parties & Functions service, or speak with us about combining both for larger private events." },
      { q: "Can you manage ticket and wristband checks at entry?", a: "Yes, access and ticket control is a standard part of our event security service." },
      { q: "How far in advance should I book event security?", a: "We recommend booking as early as possible, especially for weekend events, to guarantee guard availability." },
    ],
  },
  {
    slug: "retail-security-loss-prevention",
    title: "Retail Security & Loss Prevention",
    shortDesc: "Reduce theft and shrinkage with proactive in-store protection and loss prevention strategies.",
    icon: Store,
    image: "/Retail Security & Loss Prevention.jpeg",
    seoTitle: "Retail Security & Loss Prevention Perth | NexGuard Protection",
    metaDescription:
      "Retail security guards and loss prevention services for Perth stores and shopping centres. Reduce theft and shrinkage with proactive, professional in-store security. Get a free quote.",
    keywords: [
      "retail security Perth",
      "loss prevention security WA",
      "retail security guards Perth",
      "shop security services Western Australia",
    ],
    heroTagline: "Retail Security & Loss Prevention Perth",
    intro: [
      "Retail theft and shrinkage directly impact your bottom line. NexGuard Protection provides proactive retail security and loss prevention services across Perth, helping store owners, shopping centres and retail chains reduce theft, manage difficult customer situations, and create a safer shopping environment for staff and customers alike.",
      "Our retail security guards are trained to identify suspicious behaviour early, deter shoplifting through visible presence, and handle incidents calmly and professionally — without escalating situations unnecessarily. We tailor our approach to your store layout, peak trading hours and specific loss patterns.",
    ],
    benefits: [
      { title: "Theft Deterrence", desc: "A visible, professional security presence significantly reduces shoplifting incidents." },
      { title: "Customer Service Focus", desc: "Our guards are trained to be approachable and helpful, not just enforcement-focused." },
      { title: "Incident De-escalation", desc: "Difficult situations are handled calmly to protect staff, customers and your store's reputation." },
      { title: "Peak Period Coverage", desc: "Additional guards scheduled for sales, holidays and other high-risk trading periods." },
      { title: "Loss Pattern Analysis", desc: "We work with your team to identify and address recurring theft patterns in-store." },
      { title: "Shopping Centre Experience", desc: "Experienced in both individual stores and larger shopping centre environments." },
    ],
    process: [
      { step: "Store Assessment", desc: "We review your store layout, high-risk areas and current loss patterns." },
      { step: "Tailored Coverage Plan", desc: "Guard hours and positioning are planned around your peak trading times." },
      { step: "In-Store Deployment", desc: "Guards begin coverage, blending professional presence with customer service." },
      { step: "Ongoing Review", desc: "Regular check-ins to adjust coverage as your store's needs change." },
    ],
    faqs: [
      { q: "Can retail security guards make an arrest?", a: "Our guards operate within WA legal guidelines, focusing on deterrence, observation and safe de-escalation — we'll explain exactly what is and isn't within scope during your consultation." },
      { q: "Do you provide security for shopping centres, not just individual stores?", a: "Yes, we provide both individual store coverage and broader shopping centre security teams." },
      { q: "Can guards be scheduled just for busy periods like sales or holidays?", a: "Yes, many retail clients use us specifically for high-risk peak trading periods rather than full-time coverage." },
      { q: "How quickly can retail security be arranged?", a: "Contact us with your requirements and we'll provide a fast turnaround quote, often with guards available within days." },
    ],
  },
  {
    slug: "alarm-response",
    title: "Alarm Response",
    shortDesc: "Fast 24/7 response to alarm activations and urgent security incidents across the Perth metro area.",
    icon: BellRing,
    image: "/alarmresponse.jpg",
    seoTitle: "24/7 Alarm Response Perth | NexGuard Protection",
    metaDescription:
      "Fast, reliable 24/7 alarm response services across Perth WA. Licensed security guards dispatched immediately to alarm activations. Get a free quote from NexGuard Protection.",
    keywords: [
      "alarm response Perth",
      "24/7 alarm response WA",
      "alarm response security Perth",
      "emergency security response Western Australia",
    ],
    heroTagline: "24/7 Alarm Response Perth",
    intro: [
      "When your alarm activates, every minute matters. NexGuard Protection provides fast, reliable alarm response services across the Perth metro area, with licensed security guards dispatched immediately to investigate triggered alarms, secure the property, and report findings — day or night.",
      "We work with your existing alarm monitoring provider or directly with you to ensure a rapid, professional response any time an activation occurs, giving property owners and businesses confidence that their site is protected even when no one is on-site.",
    ],
    benefits: [
      { title: "Rapid Dispatch", desc: "Guards are dispatched the moment an alarm activation is received — no delays, no excuses." },
      { title: "24/7 Availability", desc: "Our alarm response service operates around the clock, every day of the year." },
      { title: "Thorough Site Checks", desc: "Every response includes a full property check to confirm whether the activation was a genuine incident." },
      { title: "Direct Reporting", desc: "You receive immediate notification of findings after every response." },
      { title: "Works With Your Existing Alarm Provider", desc: "We integrate smoothly with most monitoring companies and alarm systems already in place." },
      { title: "Licensed Response Officers", desc: "All responding guards are fully licensed and trained for emergency response situations." },
    ],
    process: [
      { step: "Alarm Activation Received", desc: "Your monitoring provider or system alerts our response team." },
      { step: "Immediate Dispatch", desc: "The nearest available guard is sent directly to your property." },
      { step: "Site Investigation", desc: "A full check of the property is conducted to assess the situation." },
      { step: "Reporting & Next Steps", desc: "You're notified of the outcome, with police contacted immediately if required." },
    ],
    faqs: [
      { q: "How quickly can you respond to an alarm activation?", a: "Response times depend on guard location relative to your property, but rapid response across the Perth metro area is central to this service." },
      { q: "Do I need to switch alarm monitoring providers to use this service?", a: "No, we can work alongside your existing alarm monitoring company — just let us know your setup during onboarding." },
      { q: "What happens if the alarm response finds a genuine break-in?", a: "Our guard secures the scene, contacts police immediately, and stays on-site until the situation is resolved or authorities arrive." },
      { q: "Is alarm response available on weekends and public holidays?", a: "Yes, this is a genuine 24/7/365 service with no exceptions for holidays or weekends." },
    ],
  },
  {
    slug: "concierge-corporate-security",
    title: "Concierge & Corporate Security",
    shortDesc: "Professional front-of-house security for office buildings, hotels, strata and corporate campuses.",
    icon: Briefcase,
    image: "/Concierge & Corporate Security.jpeg",
    seoTitle: "Concierge & Corporate Security Perth | NexGuard Protection",
    metaDescription:
      "Professional concierge and corporate security services for Perth office buildings, hotels and corporate campuses. Front-of-house security with a polished, professional presence.",
    keywords: [
      "corporate security Perth",
      "concierge security services WA",
      "office building security Perth",
      "front of house security Western Australia",
    ],
    heroTagline: "Concierge & Corporate Security Perth",
    intro: [
      "First impressions matter. NexGuard Protection provides concierge and corporate security officers who combine a polished, professional front-of-house presence with genuine security expertise — ideal for office buildings, hotels, strata complexes and corporate campuses across Perth.",
      "Our concierge security guards manage visitor access, greet guests professionally, monitor building activity, and respond to incidents — all while presenting the calm, approachable image your business or building wants at its front door.",
    ],
    benefits: [
      { title: "Professional First Impression", desc: "Guards present a polished, corporate-appropriate image as the face of your building." },
      { title: "Visitor & Access Management", desc: "Smooth, professional handling of visitor sign-in, deliveries and building access." },
      { title: "Genuine Security Expertise", desc: "Beyond hospitality, our concierge guards are fully trained security professionals." },
      { title: "Building Monitoring", desc: "Ongoing awareness of building activity, common areas and potential issues." },
      { title: "Strata & Hotel Experience", desc: "Specific experience working within strata buildings, hotels and corporate environments." },
      { title: "Consistent Presence", desc: "The same guard or team assigned where possible, building familiarity with your tenants and staff." },
    ],
    process: [
      { step: "Building Consultation", desc: "We assess your building's front-of-house needs and current procedures." },
      { step: "Guard Matching", desc: "A guard suited to your environment's tone and requirements is selected." },
      { step: "Site Induction", desc: "Full briefing on your building's protocols, tenants and emergency procedures." },
      { step: "Ongoing Service", desc: "Consistent, professional coverage with regular check-ins on service quality." },
    ],
    faqs: [
      { q: "What's the difference between concierge security and a regular static guard?", a: "Concierge security blends a customer-facing, hospitality-style presence with full security training — ideal for buildings where the security officer is also the public face of the property." },
      { q: "Do you provide security for strata-managed apartment buildings?", a: "Yes, this is one of our most common corporate security engagements across Perth." },
      { q: "Can guards handle deliveries and visitor sign-in?", a: "Yes, visitor and delivery management is a standard part of the concierge security role." },
      { q: "Is this service available for hotels?", a: "Yes, we provide front-of-house security for hotels alongside standard concierge duties." },
    ],
  },
  {
    slug: "private-parties-functions",
    title: "Private Parties & Functions",
    shortDesc: "Experienced security personnel for private events, parties and social gatherings of any size.",
    icon: PartyPopper,
    image: "/Private Parties & Functions.jpeg",
    seoTitle: "Private Party & Function Security Perth | NexGuard Protection",
    metaDescription:
      "Professional security for private parties and functions across Perth WA. Discreet, experienced guards for birthdays, weddings and private social events. Get a free quote.",
    keywords: [
      "private event security Perth",
      "party security guards WA",
      "function security Perth",
      "private function security Western Australia",
    ],
    heroTagline: "Private Party & Function Security Perth",
    intro: [
      "Private celebrations deserve a security presence that's professional without being overbearing. NexGuard Protection provides experienced, discreet security guards for private parties, weddings, birthdays and social functions across Perth, giving hosts peace of mind that their event and guests are protected.",
      "Whether it's managing entry at a private residence, keeping an eye on a large milestone celebration, or simply providing a calm, professional presence for guest reassurance, our function security officers blend seamlessly into the event while remaining alert and ready to act if needed.",
    ],
    benefits: [
      { title: "Discreet Professional Presence", desc: "Security that protects your event without dominating the atmosphere." },
      { title: "Guest List & Entry Management", desc: "Guards can manage entry against a guest list to prevent gatecrashers." },
      { title: "Conflict De-escalation", desc: "Trained to calmly manage any disputes or unwanted behaviour before they escalate." },
      { title: "Flexible Event Sizes", desc: "From intimate private gatherings to large milestone celebrations." },
      { title: "Residential & Venue Experience", desc: "Comfortable working at private residences as well as hired event venues." },
      { title: "Peace of Mind for Hosts", desc: "Hosts can relax and enjoy their own event knowing security is handled." },
    ],
    process: [
      { step: "Event Discussion", desc: "We learn about your event, guest numbers, venue and any specific concerns." },
      { step: "Guard Assignment", desc: "The right number of guards suited to your event's tone are arranged." },
      { step: "Pre-Event Briefing", desc: "Guards are briefed on the guest list, venue layout and your expectations." },
      { step: "On-the-Night Coverage", desc: "Discreet, professional security presence throughout your event." },
    ],
    faqs: [
      { q: "Is security overkill for a private party?", a: "Many hosts find a single discreet guard provides valuable peace of mind for larger gatherings, milestone events or where alcohol is involved — without changing the atmosphere of the event." },
      { q: "Can guards check guests against a list at the door?", a: "Yes, guest list management and entry control is a common part of this service." },
      { q: "Do you provide security for venues as well as private homes?", a: "Yes, we cover both private residences and hired event venues across Perth." },
      { q: "How far in advance should I book for a private function?", a: "We recommend booking at least a couple of weeks ahead, especially for weekend events, to guarantee availability." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
