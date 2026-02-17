import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { useState } from "react";
import { MapPin, Mail, Phone, Search, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// UK Area Representatives (organized by postcode prefix)
const ukAreaReps = {
  "AL": { name: "John Davies", email: "john.davies@fergusonclub.com", phone: "01234 567890", area: "Hertfordshire" },
  "B": { name: "Sarah Thompson", email: "sarah.thompson@fergusonclub.com", phone: "01234 567891", area: "Birmingham & West Midlands" },
  "BA": { name: "Michael Brown", email: "michael.brown@fergusonclub.com", phone: "01234 567892", area: "Bath & North East Somerset" },
  "BB": { name: "David Wilson", email: "david.wilson@fergusonclub.com", phone: "01234 567893", area: "Blackburn & Lancashire" },
  "BD": { name: "Emma Jones", email: "emma.jones@fergusonclub.com", phone: "01234 567894", area: "Bradford & West Yorkshire" },
  "BH": { name: "Robert Taylor", email: "robert.taylor@fergusonclub.com", phone: "01234 567895", area: "Bournemouth & Dorset" },
  "BN": { name: "Lisa Anderson", email: "lisa.anderson@fergusonclub.com", phone: "01234 567896", area: "Brighton & Sussex" },
  "BR": { name: "James Martin", email: "james.martin@fergusonclub.com", phone: "01234 567897", area: "Bromley & Kent" },
  "BS": { name: "Helen White", email: "helen.white@fergusonclub.com", phone: "01234 567898", area: "Bristol & Somerset" },
  "CA": { name: "Peter Harris", email: "peter.harris@fergusonclub.com", phone: "01234 567899", area: "Cumbria" },
  "CB": { name: "Susan Clark", email: "susan.clark@fergusonclub.com", phone: "01234 567800", area: "Cambridge & Cambridgeshire" },
  "CF": { name: "Thomas Lewis", email: "thomas.lewis@fergusonclub.com", phone: "01234 567801", area: "Cardiff & South Wales" },
  "CH": { name: "Margaret Walker", email: "margaret.walker@fergusonclub.com", phone: "01234 567802", area: "Chester & Cheshire" },
  "CM": { name: "William Hall", email: "william.hall@fergusonclub.com", phone: "01234 567803", area: "Chelmsford & Essex" },
  "CO": { name: "Patricia Allen", email: "patricia.allen@fergusonclub.com", phone: "01234 567804", area: "Colchester & Essex" },
  "CR": { name: "Richard Young", email: "richard.young@fergusonclub.com", phone: "01234 567805", area: "Croydon & Surrey" },
  "CT": { name: "Linda King", email: "linda.king@fergusonclub.com", phone: "01234 567806", area: "Canterbury & Kent" },
  "CV": { name: "Charles Wright", email: "charles.wright@fergusonclub.com", phone: "01234 567807", area: "Coventry & Warwickshire" },
  "CW": { name: "Barbara Green", email: "barbara.green@fergusonclub.com", phone: "01234 567808", area: "Crewe & Cheshire" },
  "DA": { name: "Christopher Baker", email: "christopher.baker@fergusonclub.com", phone: "01234 567809", area: "Dartford & Kent" },
  "DD": { name: "Dorothy Adams", email: "dorothy.adams@fergusonclub.com", phone: "01234 567810", area: "Dundee & Angus" },
  "DE": { name: "George Nelson", email: "george.nelson@fergusonclub.com", phone: "01234 567811", area: "Derby & Derbyshire" },
  "DH": { name: "Nancy Carter", email: "nancy.carter@fergusonclub.com", phone: "01234 567812", area: "Durham" },
  "DL": { name: "Kenneth Mitchell", email: "kenneth.mitchell@fergusonclub.com", phone: "01234 567813", area: "Darlington & County Durham" },
  "DN": { name: "Betty Roberts", email: "betty.roberts@fergusonclub.com", phone: "01234 567814", area: "Doncaster & South Yorkshire" },
  "DT": { name: "Steven Turner", email: "steven.turner@fergusonclub.com", phone: "01234 567815", area: "Dorchester & Dorset" },
  "DY": { name: "Carol Phillips", email: "carol.phillips@fergusonclub.com", phone: "01234 567816", area: "Dudley & West Midlands" },
  "E": { name: "Paul Campbell", email: "paul.campbell@fergusonclub.com", phone: "01234 567817", area: "East London" },
  "EC": { name: "Donna Parker", email: "donna.parker@fergusonclub.com", phone: "01234 567818", area: "Central London" },
  "EH": { name: "Mark Evans", email: "mark.evans@fergusonclub.com", phone: "01234 567819", area: "Edinburgh & Lothian" },
  "EN": { name: "Ruth Edwards", email: "ruth.edwards@fergusonclub.com", phone: "01234 567820", area: "Enfield & North London" },
  "EX": { name: "Daniel Collins", email: "daniel.collins@fergusonclub.com", phone: "01234 567821", area: "Exeter & Devon" },
  "FK": { name: "Janet Stewart", email: "janet.stewart@fergusonclub.com", phone: "01234 567822", area: "Falkirk & Stirlingshire" },
  "FY": { name: "Brian Morris", email: "brian.morris@fergusonclub.com", phone: "01234 567823", area: "Fylde & Lancashire" },
  "G": { name: "Sharon Rogers", email: "sharon.rogers@fergusonclub.com", phone: "01234 567824", area: "Glasgow & Strathclyde" },
  "GL": { name: "Jeffrey Reed", email: "jeffrey.reed@fergusonclub.com", phone: "01234 567825", area: "Gloucester & Gloucestershire" },
  "GU": { name: "Deborah Cook", email: "deborah.cook@fergusonclub.com", phone: "01234 567826", area: "Guildford & Surrey" },
  "HA": { name: "Gary Morgan", email: "gary.morgan@fergusonclub.com", phone: "01234 567827", area: "Harrow & North London" },
  "HD": { name: "Judith Bell", email: "judith.bell@fergusonclub.com", phone: "01234 567828", area: "Huddersfield & West Yorkshire" },
  "HG": { name: "Frank Murphy", email: "frank.murphy@fergusonclub.com", phone: "01234 567829", area: "Harrogate & North Yorkshire" },
  "HP": { name: "Teresa Bailey", email: "teresa.bailey@fergusonclub.com", phone: "01234 567830", area: "Hemel Hempstead & Hertfordshire" },
  "HR": { name: "Raymond Rivera", email: "raymond.rivera@fergusonclub.com", phone: "01234 567831", area: "Hereford & Herefordshire" },
  "HS": { name: "Cheryl Cooper", email: "cheryl.cooper@fergusonclub.com", phone: "01234 567832", area: "Outer Hebrides" },
  "HU": { name: "Gerald Richardson", email: "gerald.richardson@fergusonclub.com", phone: "01234 567833", area: "Hull & East Yorkshire" },
  "HX": { name: "Marilyn Cox", email: "marilyn.cox@fergusonclub.com", phone: "01234 567834", area: "Halifax & West Yorkshire" },
  "IG": { name: "Dennis Howard", email: "dennis.howard@fergusonclub.com", phone: "01234 567835", area: "Ilford & East London" },
  "IP": { name: "Pamela Ward", email: "pamela.ward@fergusonclub.com", phone: "01234 567836", area: "Ipswich & Suffolk" },
  "IV": { name: "Henry Torres", email: "henry.torres@fergusonclub.com", phone: "01234 567837", area: "Inverness & Highlands" },
  "KA": { name: "Katherine Peterson", email: "katherine.peterson@fergusonclub.com", phone: "01234 567838", area: "Kilmarnock & Ayrshire" },
  "KT": { name: "Arthur Gray", email: "arthur.gray@fergusonclub.com", phone: "01234 567839", area: "Kingston & Surrey" },
  "KW": { name: "Virginia Ramirez", email: "virginia.ramirez@fergusonclub.com", phone: "01234 567840", area: "Kirkwall & Orkney" },
  "KY": { name: "Douglas James", email: "douglas.james@fergusonclub.com", phone: "01234 567841", area: "Kirkcaldy & Fife" },
  "L": { name: "Joyce Watson", email: "joyce.watson@fergusonclub.com", phone: "01234 567842", area: "Liverpool & Merseyside" },
  "LA": { name: "Russell Brooks", email: "russell.brooks@fergusonclub.com", phone: "01234 567843", area: "Lancaster & Lancashire" },
  "LD": { name: "Frances Kelly", email: "frances.kelly@fergusonclub.com", phone: "01234 567844", area: "Llandrindod Wells & Powys" },
  "LE": { name: "Eugene Sanders", email: "eugene.sanders@fergusonclub.com", phone: "01234 567845", area: "Leicester & Leicestershire" },
  "LL": { name: "Diana Price", email: "diana.price@fergusonclub.com", phone: "01234 567846", area: "Llandudno & North Wales" },
  "LN": { name: "Philip Bennett", email: "philip.bennett@fergusonclub.com", phone: "01234 567847", area: "Lincoln & Lincolnshire" },
  "LS": { name: "Alice Wood", email: "alice.wood@fergusonclub.com", phone: "01234 567848", area: "Leeds & West Yorkshire" },
  "LU": { name: "Howard Barnes", email: "howard.barnes@fergusonclub.com", phone: "01234 567849", area: "Luton & Bedfordshire" },
  "M": { name: "Jean Ross", email: "jean.ross@fergusonclub.com", phone: "01234 567850", area: "Manchester & Greater Manchester" },
  "ME": { name: "Willie Henderson", email: "willie.henderson@fergusonclub.com", phone: "01234 567851", area: "Medway & Kent" },
  "MK": { name: "Kathleen Coleman", email: "kathleen.coleman@fergusonclub.com", phone: "01234 567852", area: "Milton Keynes & Buckinghamshire" },
  "ML": { name: "Ralph Jenkins", email: "ralph.jenkins@fergusonclub.com", phone: "01234 567853", area: "Motherwell & Lanarkshire" },
  "N": { name: "Janice Perry", email: "janice.perry@fergusonclub.com", phone: "01234 567854", area: "North London" },
  "NE": { name: "Roy Powell", email: "roy.powell@fergusonclub.com", phone: "01234 567855", area: "Newcastle & Tyne and Wear" },
  "NG": { name: "Nicole Long", email: "nicole.long@fergusonclub.com", phone: "01234 567856", area: "Nottingham & Nottinghamshire" },
  "NN": { name: "Carl Patterson", email: "carl.patterson@fergusonclub.com", phone: "01234 567857", area: "Northampton & Northamptonshire" },
  "NP": { name: "Christine Hughes", email: "christine.hughes@fergusonclub.com", phone: "01234 567858", area: "Newport & South Wales" },
  "NR": { name: "Samuel Flores", email: "samuel.flores@fergusonclub.com", phone: "01234 567859", area: "Norwich & Norfolk" },
  "NW": { name: "Marie Washington", email: "marie.washington@fergusonclub.com", phone: "01234 567860", area: "North West London" },
  "OL": { name: "Louis Butler", email: "louis.butler@fergusonclub.com", phone: "01234 567861", area: "Oldham & Greater Manchester" },
  "OX": { name: "Lillian Simmons", email: "lillian.simmons@fergusonclub.com", phone: "01234 567862", area: "Oxford & Oxfordshire" },
  "PA": { name: "Jesse Foster", email: "jesse.foster@fergusonclub.com", phone: "01234 567863", area: "Paisley & Renfrewshire" },
  "PE": { name: "Evelyn Gonzales", email: "evelyn.gonzales@fergusonclub.com", phone: "01234 567864", area: "Peterborough & Cambridgeshire" },
  "PH": { name: "Wayne Bryant", email: "wayne.bryant@fergusonclub.com", phone: "01234 567865", area: "Perth & Perthshire" },
  "PL": { name: "Brenda Alexander", email: "brenda.alexander@fergusonclub.com", phone: "01234 567866", area: "Plymouth & Devon" },
  "PO": { name: "Albert Russell", email: "albert.russell@fergusonclub.com", phone: "01234 567867", area: "Portsmouth & Hampshire" },
  "PR": { name: "Julia Griffin", email: "julia.griffin@fergusonclub.com", phone: "01234 567868", area: "Preston & Lancashire" },
  "RG": { name: "Harold Diaz", email: "harold.diaz@fergusonclub.com", phone: "01234 567869", area: "Reading & Berkshire" },
  "RH": { name: "Carolyn Hayes", email: "carolyn.hayes@fergusonclub.com", phone: "01234 567870", area: "Redhill & Surrey" },
  "RM": { name: "Fred Myers", email: "fred.myers@fergusonclub.com", phone: "01234 567871", area: "Romford & Essex" },
  "S": { name: "Irene Ford", email: "irene.ford@fergusonclub.com", phone: "01234 567872", area: "Sheffield & South Yorkshire" },
  "SA": { name: "Walter Hamilton", email: "walter.hamilton@fergusonclub.com", phone: "01234 567873", area: "Swansea & West Wales" },
  "SE": { name: "Beverly Graham", email: "beverly.graham@fergusonclub.com", phone: "01234 567874", area: "South East London" },
  "SG": { name: "Albert Sullivan", email: "albert.sullivan@fergusonclub.com", phone: "01234 567875", area: "Stevenage & Hertfordshire" },
  "SK": { name: "Gloria Wallace", email: "gloria.wallace@fergusonclub.com", phone: "01234 567876", area: "Stockport & Greater Manchester" },
  "SL": { name: "Bruce Woods", email: "bruce.woods@fergusonclub.com", phone: "01234 567877", area: "Slough & Berkshire" },
  "SM": { name: "Phyllis Cole", email: "phyllis.cole@fergusonclub.com", phone: "01234 567878", area: "Sutton & Surrey" },
  "SN": { name: "Roger West", email: "roger.west@fergusonclub.com", phone: "01234 567879", area: "Swindon & Wiltshire" },
  "SO": { name: "Norma Jordan", email: "norma.jordan@fergusonclub.com", phone: "01234 567880", area: "Southampton & Hampshire" },
  "SP": { name: "Jeremy Owens", email: "jeremy.owens@fergusonclub.com", phone: "01234 567881", area: "Salisbury & Wiltshire" },
  "SR": { name: "Doris Reynolds", email: "doris.reynolds@fergusonclub.com", phone: "01234 567882", area: "Sunderland & Tyne and Wear" },
  "SS": { name: "Clarence Fisher", email: "clarence.fisher@fergusonclub.com", phone: "01234 567883", area: "Southend & Essex" },
  "ST": { name: "Lois Ellis", email: "lois.ellis@fergusonclub.com", phone: "01234 567884", area: "Stoke-on-Trent & Staffordshire" },
  "SW": { name: "Joe Marshall", email: "joe.marshall@fergusonclub.com", phone: "01234 567885", area: "South West London" },
  "SY": { name: "Mildred Stone", email: "mildred.stone@fergusonclub.com", phone: "01234 567886", area: "Shrewsbury & Shropshire" },
  "TA": { name: "Earl Hawkins", email: "earl.hawkins@fergusonclub.com", phone: "01234 567887", area: "Taunton & Somerset" },
  "TD": { name: "Gladys Dunn", email: "gladys.dunn@fergusonclub.com", phone: "01234 567888", area: "Galashiels & Scottish Borders" },
  "TF": { name: "Antonio Perkins", email: "antonio.perkins@fergusonclub.com", phone: "01234 567889", area: "Telford & Shropshire" },
  "TN": { name: "Edith Spencer", email: "edith.spencer@fergusonclub.com", phone: "01234 567890", area: "Tonbridge & Kent" },
  "TQ": { name: "Randy Hicks", email: "randy.hicks@fergusonclub.com", phone: "01234 567891", area: "Torquay & Devon" },
  "TR": { name: "Ruby Crawford", email: "ruby.crawford@fergusonclub.com", phone: "01234 567892", area: "Truro & Cornwall" },
  "TS": { name: "Billy Henry", email: "billy.henry@fergusonclub.com", phone: "01234 567893", area: "Middlesbrough & Teesside" },
  "TW": { name: "Thelma Boyd", email: "thelma.boyd@fergusonclub.com", phone: "01234 567894", area: "Twickenham & Middlesex" },
  "UB": { name: "Andre Mason", email: "andre.mason@fergusonclub.com", phone: "01234 567895", area: "Uxbridge & Middlesex" },
  "W": { name: "Marjorie Morales", email: "marjorie.morales@fergusonclub.com", phone: "01234 567896", area: "West London" },
  "WA": { name: "Barry Kennedy", email: "barry.kennedy@fergusonclub.com", phone: "01234 567897", area: "Warrington & Cheshire" },
  "WC": { name: "Constance Warren", email: "constance.warren@fergusonclub.com", phone: "01234 567898", area: "West Central London" },
  "WD": { name: "Milton Dixon", email: "milton.dixon@fergusonclub.com", phone: "01234 567899", area: "Watford & Hertfordshire" },
  "WF": { name: "Bonnie Reyes", email: "bonnie.reyes@fergusonclub.com", phone: "01234 567900", area: "Wakefield & West Yorkshire" },
  "WN": { name: "Franklin Burns", email: "franklin.burns@fergusonclub.com", phone: "01234 567901", area: "Wigan & Greater Manchester" },
  "WR": { name: "Hazel Gordon", email: "hazel.gordon@fergusonclub.com", phone: "01234 567902", area: "Worcester & Worcestershire" },
  "WS": { name: "Leonard Shaw", email: "leonard.shaw@fergusonclub.com", phone: "01234 567903", area: "Walsall & West Midlands" },
  "WV": { name: "Viola Holmes", email: "viola.holmes@fergusonclub.com", phone: "01234 567904", area: "Wolverhampton & West Midlands" },
  "YO": { name: "Guy Rice", email: "guy.rice@fergusonclub.com", phone: "01234 567905", area: "York & North Yorkshire" },
  "ZE": { name: "Bernice Robertson", email: "bernice.robertson@fergusonclub.com", phone: "01234 567906", area: "Shetland Islands" }
};

// International Representatives
const internationalReps = [
  {
    name: "Pierre Dubois",
    country: "France",
    email: "pierre.dubois@fergusonclub.com",
    phone: "+33 1 23 45 67 89",
    region: "Continental Europe"
  },
  {
    name: "Hans Mueller",
    country: "Germany",
    email: "hans.mueller@fergusonclub.com",
    phone: "+49 30 12345678",
    region: "Central Europe"
  },
  {
    name: "Lars Andersson",
    country: "Sweden",
    email: "lars.andersson@fergusonclub.com",
    phone: "+46 8 123 456 78",
    region: "Scandinavia"
  },
  {
    name: "Michael O'Brien",
    country: "Ireland",
    email: "michael.obrien@fergusonclub.com",
    phone: "+353 1 234 5678",
    region: "Ireland"
  },
  {
    name: "John Anderson",
    country: "USA",
    email: "john.anderson@fergusonclub.com",
    phone: "+1 555 123 4567",
    region: "North America"
  },
  {
    name: "Robert Mitchell",
    country: "Canada",
    email: "robert.mitchell@fergusonclub.com",
    phone: "+1 416 555 1234",
    region: "North America"
  },
  {
    name: "David Thompson",
    country: "Australia",
    email: "david.thompson@fergusonclub.com",
    phone: "+61 2 9876 5432",
    region: "Australia & New Zealand"
  },
  {
    name: "James Wilson",
    country: "New Zealand",
    email: "james.wilson@fergusonclub.com",
    phone: "+64 9 876 5432",
    region: "Australia & New Zealand"
  }
];

export default function Contact() {
  const [postcode, setPostcode] = useState("");
  const [searchResult, setSearchResult] = useState<typeof ukAreaReps[keyof typeof ukAreaReps] | null>(null);
  const [searchError, setSearchError] = useState("");

  const handlePostcodeSearch = () => {
    const cleanPostcode = postcode.trim().toUpperCase().replace(/\s/g, "");
    
    if (cleanPostcode.length < 2) {
      setSearchError("Please enter at least the first 2 characters of your postcode");
      setSearchResult(null);
      return;
    }

    // Extract the postcode area (first 1-2 letters)
    const postcodeArea = cleanPostcode.match(/^[A-Z]{1,2}/)?.[0] || "";
    
    if (postcodeArea && ukAreaReps[postcodeArea as keyof typeof ukAreaReps]) {
      setSearchResult(ukAreaReps[postcodeArea as keyof typeof ukAreaReps]);
      setSearchError("");
    } else {
      setSearchError("No area representative found for this postcode. Please contact our main office.");
      setSearchResult(null);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Ferguson Club"
        description="Get in touch with the Ferguson Club. Find your local area representative or contact our main office."
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Get in <span className="text-[#8B1538]">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you're a prospective member, current member, or just have a question about Ferguson tractors, 
                we're here to help. Find your local area representative or contact our main office.
              </p>
            </div>
          </div>
        </section>

        {/* UK Postcode Lookup */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#8B1538]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#8B1538]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Find Your Area Representative</h2>
                  <p className="text-gray-600">UK members only</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Enter the first 2-3 characters of your UK postcode to find your local area representative. 
                They can provide personalized support, information about local events, and connect you with nearby members.
              </p>

              <div className="flex gap-4 mb-6">
                <div className="flex-grow">
                  <Label htmlFor="postcode" className="sr-only">Postcode</Label>
                  <Input
                    id="postcode"
                    type="text"
                    placeholder="e.g. SW1, M1, EH1"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    onKeyPress={(e) => e.key === "Enter" && handlePostcodeSearch()}
                    className="text-lg h-14"
                    maxLength={4}
                  />
                </div>
                <Button 
                  onClick={handlePostcodeSearch}
                  size="lg"
                  className="bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 h-14"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>

              {searchError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="text-red-800">{searchError}</p>
                </div>
              )}

              {searchResult && (
                <div className="bg-white border-2 border-[#8B1538] rounded-2xl p-6 space-y-4 animate-in slide-in-from-bottom-5 duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <User className="w-6 h-6 text-[#8B1538]" />
                    <h3 className="text-2xl font-bold text-gray-900">Your Area Representative</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Name</div>
                      <div className="text-lg font-semibold text-gray-900">{searchResult.name}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Area</div>
                      <div className="text-lg font-semibold text-gray-900">{searchResult.area}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Email</div>
                      <a href={`mailto:${searchResult.email}`} className="text-lg text-[#8B1538] hover:underline">
                        {searchResult.email}
                      </a>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Phone</div>
                      <a href={`tel:${searchResult.phone}`} className="text-lg text-[#8B1538] hover:underline">
                        {searchResult.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* International Representatives */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-[#8B1538]" />
                <h2 className="text-4xl font-bold text-gray-900">International Representatives</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                For members outside the UK, please contact your regional representative
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalReps.map((rep, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Name</div>
                      <div className="text-lg font-bold text-gray-900">{rep.name}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Country</div>
                      <div className="font-semibold text-gray-900">{rep.country}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Region</div>
                      <div className="font-semibold text-gray-900">{rep.region}</div>
                    </div>
                    <div className="pt-3 border-t border-gray-100 space-y-2">
                      <a href={`mailto:${rep.email}`} className="flex items-center text-[#8B1538] hover:underline">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">{rep.email}</span>
                      </a>
                      <a href={`tel:${rep.phone}`} className="flex items-center text-[#8B1538] hover:underline">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="text-sm">{rep.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Have a general inquiry? Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" type="text" placeholder="Your name" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-2" required />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" type="text" placeholder="What is your message about?" className="mt-2" required />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..." 
                  className="mt-2 min-h-[200px]" 
                  required 
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white">
                Send Message
              </Button>
            </form>
          </div>
        </section>

        {/* Main Office Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Main Office</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8B1538]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-[#8B1538]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:info@fergusonclub.com" className="text-[#8B1538] hover:underline">
                    info@fergusonclub.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8B1538]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-[#8B1538]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+441234567890" className="text-[#8B1538] hover:underline">
                    +44 (0) 1234 567890
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8B1538]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-[#8B1538]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}