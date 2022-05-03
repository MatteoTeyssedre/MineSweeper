export class player{
    private namePlayer!: string;
    private scorePlayer = 0;

    constructor(name: string){
        this.namePlayer = name;
    }

    getNamePlayer(): string{
        return this.namePlayer;
    }

    getScorePlayer(): number{
        return this.scorePlayer;
    }

    setNamePlayer(name: string){
        this.namePlayer = name;
    }

    setScorePlayer(score: number){
        this.scorePlayer = score;
    }

}