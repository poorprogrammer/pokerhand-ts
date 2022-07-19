export default (handPlayer1: string, handPlayer2: string) => {
    return highestRank(handPlayer1)>highestRank(handPlayer2);
}

const highestRank = (hand: string): number => {
    return cards(hand).reduce((currentHighest, card)=> Math.max(rankOfCard(card),currentHighest), 0);
}

const cards = (hand: string): string[] =>{
    return hand.split(" ");
}

const rankOfCard = (card: string): number => {
    return "23456789TJQKA".indexOf(card[0]);
}
