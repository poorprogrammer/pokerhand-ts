export default (handPlayer1: string, handPlayer2: string) => {
    return winByOnePair(new Cards(handPlayer1), new Cards(handPlayer2)) ||
    winByHighCard(cards(handPlayer1), cards(handPlayer2));
}

class Cards{
    cards: string[]

    constructor(cardString :string) {
        this.cards = cardString.split(" ");
    }

    private get ranks() {
        return ranksOfCards(this.cards)
    }

    getPair() {
        return this.ranks.filter((rank) => countRank(this.ranks, rank)=== 2);
    }
}

const ranksOfCards = (cards: string[]) => {
    return cards.map(rankOfCard)
}

const winByOnePair = (handPlayer1: Cards, handPlayer2: Cards) => {
    const pairsOfP1 = handPlayer1.getPair()
    const pairsOfP2 = handPlayer2.getPair()
    if(pairsOfP1.length >= 1 && pairsOfP2.length >= 1) {
        return pairsOfP1[0] > pairsOfP2[0]
    }
    return pairsOfP1.length >= 1
}

const countRank = (ranksOfAHand: number[], rank: number) => {
    return ranksOfAHand.filter((r1) =>r1 === rank).length;
}

const winByHighCard = (handPlayer1: string[], handPlayer2: string[]) => {
    const cardsP1 = removeDuplicateRanks(handPlayer1, handPlayer2);
    const cardsP2 = removeDuplicateRanks(handPlayer2, handPlayer1);
    return highestRank(cardsP1)>highestRank(cardsP2);
}

const removeDuplicateRanks = (hand1: string[], hand2: string[]) => {
    return hand1.filter((card) => !ranksOfCards(hand2).includes(rankOfCard(card)));
}

const highestRank = (cards: string[]): number => {
    return ranksOfCards(cards)
    .reduce((currentHighest, rank) =>
     Math.max(rank,currentHighest), 0);
}

const cards = (hand: string): string[] =>{
    return hand.split(" ");
}

const rankOfCard = (card: string): number => {
    return "23456789TJQKA".indexOf(card[0]);
}
