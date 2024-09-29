<script lang="ts">
  import { codeToHtml } from "shiki";
  const kqlCode = `
  Tablename 
  | where Condition
  | summarize Aggregation by Grouping 
  | order by Column [asc|desc] 
  | project Column1, Column2 
  | render ChartType
  `;

  async function code() {
    return await codeToHtml(kqlCode, {
      lang: "kql",
      theme: "nord",
    });
  }
</script>

<h2>Application Insights</h2>
<h3>KQL på 1-2-3</h3>

<p>
  Spørrespråket som brukes når man søker i application insights er KQL (Kusto
  Query Language). En typisk spørring er bygget opp på denne måten:
</p>
{#await code()}Formatterer kode 💅{:then formattedCode}{@html formattedCode}{/await}
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
