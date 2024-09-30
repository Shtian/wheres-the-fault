<script>
  import ShikiCode from "$lib/components/ShikiCode.svelte";
  const queryUrlsKql = `pageViews
| where timestamp > ago(30m) // tilpass til korrekt tidsrom
| where url startswith "https://bestill.ice.no/mobil?" or url startswith "https://bestill.ice.no/mbb/start?"
| project url`;
</script>

<h2 id="common-errors">Kjente feilmeldinger</h2>
<h3 id="common-errors-orderform">Orderform</h3>
<div class="overflow-x-auto">
  <table class="table-fixed w-full">
    <thead>
      <tr>
        <th>Feilmelding</th>
        <th>Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          >[Voice|MBB B2C|MBB B2B] Customer entered orderform with invalid
          offering id(s): <code>id</code></td
        >
        <td>
          <p>
            For å finne ut om det er en gammel e-post eller annonse, sjekk
            URL-en de kom inn med og se etter queryparametere som har
            utm-parametere eller annet (<code>gclsrc</code>,
            <code>utm_source</code> etc.). Lenker fra ice.no har ikke det:
          </p>
          <ShikiCode codeToFormat={queryUrlsKql} lang="kql" />
          <p>
            Hvis den <strong>ikke</strong> har slike queryparametre, kan du sjekke
            om det er en blokk på ice.no som er utdatert.
          </p>
        </td>
      </tr>
      <tr>
        <td
          ><code
            >"Message":"The operation could not complete because a record in the
            Product Assign table was locked by another user. Please retry the
            activity."</code
          ></td
        >
        <td>
          <p>
            Trøbbel med Navi-databasen, sjekk #ice-operations etter
            NavibillingUnavailableException eller annen støy som kan forklare
            vår feil. Spør i kanalen om det ser ut til å ha pågått lenge.
          </p>
        </td>
      </tr>
      <tr>
        <td
          ><code
            >"Message":"The HTTP service located at
            http://bss-p-wscstr02:7047/ICE_WSC1/WS/ice.net/Codeunit/naviBilling_Interface
            is unavailable"</code
          ></td
        >
        <td>
          <p>Samme prosedyre som over ☝️</p>
        </td>
      </tr>

      <tr>
        <td><code>UnauthorizedAccessException</code></td>
        <td>
          <p>
            Sjekk om IdentityServer opplever feil på #ice-operations.
            InvalidOperationException med timeouts, eller lignende.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<h3 id="common-errors-ice-no">Ice.no</h3>
<div class="overflow-x-auto">
  <table class="table-fixed w-full">
    <thead>
      <tr>
        <th>Feilmelding</th>
        <th>Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="min-w-[200px]"
          >System.Security.Cryptography.CryptographicException The key {"{id}"} was
          not found in the key ring.</td
        >
        <td>
          <p></p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
