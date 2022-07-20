export default (handPlayer1: string, handPlayer2: string) => {
    return winByOnePair(new Cards(handPlayer1), new Cards(handPlayer2)) ||
        winByHighCard(new Cards(handPlayer1), new Cards(handPlayer2));
}

class Cards{
    cards: string[]

    constructor(cards :string|string[]) {
        if(typeof(cards) === "string")
            this.cards = cards.split(" ");
        else
            this.cards = cards
    }

    private get ranks() {
        return ranksOfCards(this.cards)
    }

    getPair(): number[] {
        return this.ranks.filter((rank) => countRank(this.ranks, rank)=== 2);
    }

    highestNonDuplicate(hand2: Cards) {
        return this.nonDuplicateCards(hand2).highestRank();
    }

    nonDuplicateCards(hand2: Cards) {
        return new Cards(this.cards.filter((card) => !hand2.ranks.includes(rankOfCard(card))));
    }

    private highestRank(): number  {
        return this.ranks
            .reduce((currentHighest, rank) =>
            Math.max(rank,currentHighest), 0);
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

const winByHighCard = (handPlayer1: Cards, handPlayer2: Cards) => {
    return handPlayer1.highestNonDuplicate(handPlayer2) > handPlayer2.highestNonDuplicate(handPlayer1)
}

const rankOfCard = (card: string): number => {
    return "23456789TJQKA".indexOf(card[0]);
}
