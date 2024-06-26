import Head from 'next/head'
import GameStatsPage from '../../components/game-stats-page'
import Image from 'next/image'

const rows = [
    {
      key: "1",
      name: "Nitocris",
      role: "Caster",
      stars: "4",
      level: "100/100",
      status: "Building",
      type: "Arts"
    },
    {
        key: "2",
        name: "Castoria",
        role: "Caster",
        stars: "4",
        level: "100/100",
        status: "Building",
        type: "Arts"
      },
  ];
  
  const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "role",
        label: "ROLE",
    },
    {
        key: "status",
        label: "STATUS",
    },
    {
        key: "level",
        label: "LEVEL",
    },
    {
        key: "type",
        label: "TYPE"
    },
  ];

export default function FGO() 
{
    return (
        <GameStatsPage 
        gameName={"Fate/Grand Order"} 
        columns = {columns} 
        rows={rows}
        startDate={"June 2023"}>
        </GameStatsPage>
    )
}