<script>
  import { ExternalLink } from "lucide-svelte";
</script>

<h2 id="our-tools-general">
  Våre monitoreringsverktøy - hvilke feil dukker opp hvor?
</h2>

<h3 id="kibana-general">Kibana</h3>

<p>
  Kibana bruker vi for å se på logger fra våre backend-tjenester i ice som er
  hostet i internt i "ice cloud". Tjenestene logger til fil og Logstash samler
  inn dataen, dytter det inn i en søkbar Elasticsearch indeks og vi gjør søk og
  visualiseringer via Kibana (såkalt ELK-stack). Feil kommer inn i vår
  slack-kanal fra Kibana via ExceptionsMonitor.
</p>

<h3 id="application-insights-general">Application Insights</h3>

<p>
  Application Insights bruker vi for logging, for de tjenestene som hostes i
  Azure og/eller feil på klientsiden (javascript). Feil kommer inn i vår
  slack-kanal fra Application Insights via Alert Rules som poster til en Azure
  Function vi har satt opp. Se github for mer detaljer.
</p>

<h3 id="dynatrace-general">Dynatrace</h3>

<p>
  Operations bruker dynatrace til å overvåke generell oppetid på våre tjenester.
  Det er en rekke helsesjekker som pinger tjenestene våre på gitte endepunkt.
  Dersom en av disse feiler, vil dynatrace sende en melding i #ice-operations
  med info om at en tjeneste ikke lenger er tilgjengelig. Den vil også sende
  beskjed når den eventuelt får et svar igjen, og si at alt er OK.
</p>
<blockquote>
  <p>
    Obs! Disse feilene er kritiske og betyr som regel at en hel tjeneste er
    utilgjengelig. Viktig å få klarhet i dette så raskt som mulig. IT Operations
    ringer teamet ansvarlig for tjenesten, om de ikke selv kan løse opp i det.
  </p>
</blockquote>

<h3 id="hotjar-general">Hotjar</h3>

<p>
  Hotjar har flere funksjoner. Blant annet Heatmaps, Surveys, og Feedback. I
  feilsøkingssammenheng kan det være veldig nyttig å se på "Recordings" for å se
  hvilke handlinger brukeren tar.
</p>

<h3 id="incidents">Incident-håndtering</h3>
<p>
  NOC overvåker våre tjenester på et "tilgjengelig/ikke tilgjengelig" nivå og
  ved større feilrater enn vanlig, via Dynatrace blant annet. Alle skal være en
  del av "IT - NOC (English Only)" på Teams.
</p>
<p>
  Skulle en av våre tjenester ikke svare eller ha en avhengighet som gjør
  tjenesten ubrukelig, kan vi trigge en <code>Incident</code>-workflow i slack.
  Dette gjøres ved å reagere med en emoji på en feilmelding med
  <code>:create-incident:</code>. En egen kanal opprettes og NOC varsles. Les
  mer om det på
  <a
    href="https://confluence.ice.local/pages/viewpage.action?spaceKey=IT&title=Incident+handling"
    target="_blank"
    >Confluence <ExternalLink class="mb-[2px] inline-block h-4 w-4" /></a
  >.
</p>

<p>Relevante kommunikasjonskanaler:</p>
<ul>
  <li>
    Slack - <a
      target="_blank"
      href="https://lyse.slack.com/archives/C079X056K1T"
      >#ice-operations <ExternalLink class="mb-[2px] inline-block h-4 w-4" /></a
    >
  </li>
  <li>
    Slack - <a
      target="_blank"
      href="https://lyse.slack.com/archives/C07A93M6TEF"
      >#ice-incidents <ExternalLink class="mb-[2px] inline-block h-4 w-4" /></a
    >
  </li>
  <li>Teams - <code>IT - NOC (English Only)</code></li>
</ul>

<style>
  blockquote {
    quotes: none;
  }
</style>
