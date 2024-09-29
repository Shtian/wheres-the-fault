<script lang="ts">
  import ShikiCode from "$lib/components/ShikiCode.svelte";
  import { ExternalLink } from "lucide-svelte";
  const kqlCode = `
Tablename 
| where Condition
| summarize Aggregation by Grouping 
| order by Column [asc|desc] 
| project Column1, Column2 
| render ChartType
  `;

  const kqlCodeExample = `
exceptions // plukker fra exceptions-tabellen
| where timestamp > ago(30d) and timestamp < ago (10d) // alt nyere enn 30 dager og eldre enn 10 dager
| where problemId startswith "TypeError" // alt med problemId som starter på "TypeError"
| summarize count() by bin(timestamp, 1d) // grupperer på dag
| render timechart // tegner en graf
  `;
</script>

<h2 id="app-insights-intro">Application Insights</h2>
<h3 id="kql-1-2-3">KQL på 1-2-3</h3>

<p>
  Spørrespråket som brukes når man søker i application insights er KQL (Kusto
  Query Language). En typisk spørring er bygget opp på denne måten:
</p>
<ShikiCode codeToFormat={kqlCode} lang="kql" />
<ul>
  <li><code>|</code>: "Piper" resultatet til neste operasjon</li>
  <li>
    <code>where</code>: Filtrerer resultatet basert på kriterier (kan sette
    sammen logiske spørringer med and or == != for eksempel
  </li>
  <li><code>summarize</code>: Aggregerer data (GROUP BY i SQL)</li>
  <li><code>order by</code>: Sorterer resultatet</li>
  <li><code>project</code>: Velger spesifikke kolonner (SELECT i SQL)</li>
  <li>
    <code>render</code>: Tegner resultatet som forskjellige diagramtyper
    <code>areachart</code>,
    <code>columnchart</code>
  </li>
</ul>
<p>
  Som et konkret eksempel; la oss si vi vil lage en graf over hvor ofte en gitt
  feilmelding med problemId <code>TypeError at Ko</code> har skjedd de siste 7 dagene:
</p>
<ShikiCode codeToFormat={kqlCodeExample} lang="kql" />
<p>
  For mer informasjon om KQL, se
  <a
    target="_blank"
    href="https://learn.microsoft.com/en-us/kusto/query/kql-quick-reference?view=azure-monitor"
  >
    Microsoft sin dokumentasjon <ExternalLink
      class="inline-block w-4 h-4 mb-[2px]"
    />
  </a>.
</p>

<h3 id="appinsights-unminify-stacktrace">Unminify Stacktrace</h3>
<p>
  Det er ikke alltid like lett å se hva i koden vår som har feilet, når stack
  tracen er minified. Som dette eksempelet:
</p>
<pre><code
    >TypeError: Cannot read properties of undefined (reading 'substring')
    at Ko (https://bestill.ice.no/chunk-7XB3VYFR.js:2:3201)
    at Qt (https://bestill.ice.no/chunk-7XB3VYFR.js:2:2587)</code
  ></pre>
<p>
  vi finne igjen feilen i "Failures" viewet og laste opp source maps, slik at
  stack tracen blir enklere å lese ✨ Det er noen klikk for å finne samme feilen
  i "Failures" fanen, men følg denne sekvensen:
</p>

<ol>
  <li>Velg "Failures" i sidemenyen</li>
  <li>Velg "Browser"</li>
  <li>Velg "Exceptions"</li>
  <li>Velg korrekt tidsrom</li>
  <li>
    Finn feilen i lista som samsvarer med feilen fra Log-viewet (Se ProblemId i
    log view)
  </li>
  <li>Trykk på en Sample Exception</li>
</ol>
<figure>
  <img src="/images/docs/hotjar/find-stacktrace.png" alt="Find stack trace" />
</figure>
<ol>
  <li>
    Her ser vi transaksjonsdetaljer for denne spesifikke operasjonen og vi ser
    Call Stacken igjen. Vi er nødt til å laste opp source maps manuelt. Denne
    kan du finne ved å ta URL-en som er i callstacken (som regel en Chunk, Main
    eller Vendor-fil). Legg på .map på URL-en og lagre den på maskina.
  </li>
  <li>Velg "Unminify" og den vil spinne litt før du får et nytt valg.</li>
  <li>
    Last opp sourcemap-en du har på maskina fra steg 1 ved å klikke på "Click
    here to browse locally".
  </li>
</ol>
<figure>
  <img
    src="/images/docs/hotjar/find-unminify-button.png"
    alt="Find stack trace"
  />
</figure>
<p>
  Vi får nå en lesbar stack trace og det blir enklere å se akkurat hvilken del
  av koden vår som har feilet:
</p>
<pre><code
    >TypeError: TypeError: Cannot read properties of undefined (reading 'substring') 
    at substring (src/app/shared/utils/ssn.ts:97:16) 
    at isDnr (src/app/shared/utils/ssn.ts:14:6)</code
  ></pre>
