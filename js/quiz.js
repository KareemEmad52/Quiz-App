

export class Quiz{
    constructor(amout,category,deffucilty){
        this.amout = amout
        this.category = category
        this.deffucilty = deffucilty
        this.score =0
    }

    async getQuestions(){
        const res = await fetch(`https://opentdb.com/api.php?amount=${this.amout}&category=${this.category}&difficulty=${this.deffucilty}&type=multiple`)
        
        let data = await res.json()
        return data.results
    }


    endQuiz() {
        return `
        <div
          class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3"
        >
          <h2 class="mb-0">
          ${this.score == this.amout
            ? `Congratulations 🎉`
            : `Your score is ${this.score}`
          }      
          </h2>
          <button class="again btn btn-primary rounded-pill"><i class="bi bi-arrow-repeat"></i> Try Again</button>
        </div>
      `;
      }
}