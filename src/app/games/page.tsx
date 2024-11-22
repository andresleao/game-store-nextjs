import Games from "@/templates/Games";
import SidebarItemsMock from '@/components/ExploreSidebar/mock';
import newGames from '@/components/GameCardSlider/mock';

export default async function GamesPage() {
    //const gameData = await fetchGameData();

    return (
      <Games
        finteredItems={SidebarItemsMock}
        games={newGames}
      />
    );
  }
