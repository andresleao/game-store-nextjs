import HighlighMock from '@/components/Highlight/mock';
import UpComingGamesMock from '@/components/GameCardSlider/mock';
import { initializeApollo } from "@/lib/client";
import { QUERY_GAME_BY_SLUG } from "@/graphql/queries/games";
import { QueryGameBySlug, QueryGameBySlugVariables } from "@/graphql/generated/QueryGameBySlug";
import Game from '@/templates/Game/index';
import { Platform, Rating } from "@/components/GameDetails";
import formatPrice from '@/utils/formatPrice';

// async function fetchGameData(): Promise<GameTemplateProps> {
//     const descriptionHTML = `
//         <img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
//         * Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
//         <hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
//         <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
//         Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
//         <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
//         Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
//         <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
//         Take the riskiest job of your life and go after a prototype implant that is the key to immortality.
//         <p class="description__copyrights">
//         CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
//         CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
//         respective owners.
//         </p>
//     `;

//     return new Promise<GameTemplateProps>((resolve) => {
//       setTimeout(() => {
//         resolve({
//           cover: "https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg",
//           gameInfo: GameInfoMock,
//           gallery: GalleryMock,
//           description: descriptionHTML,
//           details: GameDetailsMock,
//           upcomingGames: UpComingGamesMock,
//           upcomingHighlight: HighlighMock,
//           recommendedGames: UpComingGamesMock,
//         });
//       }, 1000);
//     });
//   }

  async function getGameData(slug: string) {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<QueryGameBySlug, QueryGameBySlugVariables>({
      query: QUERY_GAME_BY_SLUG,
      variables: { slug }
    });

    const game = data.games[0];

    return {
      cover: `http://localhost:1337/${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        price: formatPrice(game.price),
        description: game.short_description,
      },
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337/${image.src}`,
        label: image.label || '',
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((p) => p.name as Platform),
        publisher: game.publisher?.name || 'Unknown Publisher',
        rating: game.rating as Rating,
        genres: game.categories.map((c) => c.name),
      },
      upcomingGames: UpComingGamesMock,
      upcomingHighlight: HighlighMock,
      recommendedGames: UpComingGamesMock,
    };
  }

  export default async function GameDetailsPage(
    { params }: { params: { slug: string } }
  ) {
    const { slug } = params;

    const gameData = await getGameData(slug);

    if (!gameData) {
      return <div>Game not found</div>;
    }

    return <Game {...gameData} />;
  }
