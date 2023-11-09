import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const articles = [
  {
    server: "1.8.8",
    proxy: "BUNGEECORD",
    urlProxy: "https://ci.md-5.net/job/BungeeCord/lastSuccessfulBuild/artifact/bootstrap/target/BungeeCord.jar",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.8.8/builds/445/downloads/paper-1.8.8-445.jar"
  },
  {
    server: "1.9.4",
    proxy: "WATERFALL",
    urlProxy: "https://api.papermc.io/v2/projects/waterfall/versions/1.19/builds/498/downloads/waterfall-1.19-498.jar",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.9.4/builds/775/downloads/paper-1.9.4-775.jar"
  },
  {
    server: "1.10.2",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.10.2/builds/918/downloads/paper-1.10.2-918.jar",
    proxy: "VELOCITY"
  },
  {
    server: "1.11.2",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.11.2/builds/1106/downloads/paper-1.11.2-1106.jar"
  },
  {
    server: "1.12.2",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.12.2/builds/1620/downloads/paper-1.12.2-1620.jar"
  },
  {
    server: "1.13.2",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.13.2/builds/657/downloads/paper-1.13.2-657.jar"
  },
  {
    server: "1.14.2",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.14.4/builds/245/downloads/paper-1.14.4-245.jar"
  },
  {
    server: "1.15.2",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.15.2/builds/393/downloads/paper-1.15.2-393.jar"
  },
  {
    server: "1.16.5",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.16.5/builds/794/downloads/paper-1.16.5-794.jar"
  },
  {
    server: "1.17.1",
    urlServer: "https://papermc.io/api/v2/projects/paper/versions/1.17.1/builds/397/downloads/paper-1.17.1-397.jar"
  },
  {
    server: "1.18.2",
    urlServer: "https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/387/downloads/paper-1.18.2-387.jar"
  },
  {
    server: "1.19.2",
    urlServer: "https://api.papermc.io/v2/projects/paper/versions/1.19/builds/65/downloads/paper-1.19-65.jar"
  },
  {
    server: "1.20.1",
    urlServer: "https://api.papermc.io/v2/projects/paper/versions/1.19/builds/65/downloads/paper-1.19-65.jar"
  },
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    Header: "Server",
    accessor: "server",
    className: "pester-data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={`${original.urlServer}`} target="blank" rel="noreferrer noopener">
        {value}
      </a>
    ),
  },
  {
    Header: "Proxy",
    accessor: "proxy",
    className: "pester-data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
        <a href={`${original.urlProxy}`} target="blank" rel="noreferrer noopener">
          {value}
        </a>
      ),
  },
];