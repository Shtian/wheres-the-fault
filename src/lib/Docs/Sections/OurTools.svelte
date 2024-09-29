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
    utilgjengelig. Viktig å få klarhet i dette så raskt som mulig. Operations
    ringer teamet ansvarlig for tjenesten, om de ikke selv kan løse opp i det.
  </p>
</blockquote>

<h3 id="hotjar-general">Hotjar</h3>

<p>
  Hotjar har flere funksjoner. Blant annet Heatmaps, Surveys, og Feedback. I
  feilsøkingssammenheng kan det være veldig nyttig å se på "Recordings" for å se
  hvilke handlinger brukeren tar.
</p>

<style>
  blockquote {
    quotes: none;
  }
</style>
