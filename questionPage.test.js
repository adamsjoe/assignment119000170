const loadPage = require('./questionPage');

pageData = require('./data/balances.json');

const validUrlText = 'balances'
const invalidUrlText = 'kangaroo'

describe('Page URL Tests', () => {
    it('should find data for a valid URL', () => {
        const data = JSON.stringify(pageData);
        expect(data).toContain(validUrlText)
    });

    /* negative test */
    it('should find no data for an invalid', () => {
        const data = JSON.stringify(pageData);
        expect(data).not.toContain(invalidUrlText)
    });

});

describe('Elements Needed for Page Load Tests', () => {
    it('the JSON element "balances.hint.titleColumn should have 3 elements', () => {
        expect(Object.keys(pageData.balances.hint.titleColumn).length).toBe(3)
    });

    /* hints */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (first) should equal "hints"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[0].linkTitle);
        expect(data).toBe("\"hints\"")
    });

    it('the JSON element "balances.hint.titleColumn.columnTitle" (first) should equal "Hints"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[0].columnTitle);
        expect(data).toBe("\"Hints\"")
    });    

    /* general */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (second) should equal "general"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[1].linkTitle);
        expect(data).toBe("\"general\"")
    });

    it('the JSON element "balances.hint.titleColumn.columnTitle" (second) should equal "General"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[1].columnTitle);
        expect(data).toBe("\"General\"")
    });        

    /* specific */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (second) should equal "specific"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[2].linkTitle);
        expect(data).toBe("\"specific\"")
    });

    it('the JSON element "balances.hint.titleColumn.columnTitle" (second) should equal "Specific to this problem"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[2].columnTitle);
        expect(data).toBe("\"Specific to this problem\"")
    });      

    
});

describe('Videos Present Tests', () => {
    it('should be 6 videos', () => {        
        expect(Object.keys(pageData.balances.hint.video).length).toBe(6)
    });

    /* problem_s video tests */
    it('first video "image" should be "problem_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[0].image);
        expect(image).toBe("\"problem_s.png\"")
    });       

    it('first video "link" should be "overall"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[0].link);
        expect(image).toBe("\"overall\"")
    });         
    
    it('first video "title" should be "problem_s"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[0].title);
        expect(image).toBe("\"problem_s\"")
    });       
    
    it('first video "type" should be "general"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[0].type);
        expect(image).toBe("\"general\"")
    });           

    /* spec_strat_balan_s video tests */
    it('second video "image" should be "spec_strat_balan_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[1].image);
        expect(image).toBe("\"spec_strat_balan_s.png\"")
    });       

    it('second video "link" should be "overall"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[1].link);
        expect(image).toBe("\"overall\"")
    });         
    
    it('second video "title" should be "spec_strat_balan_s"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[1].title);
        expect(image).toBe("\"spec_strat_balan_s\"")
    });       
    
    it('second video "type" should be "specific"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[1].type);
        expect(image).toBe("\"specific\"")
    });        

    /* mom_s video tests */
    it('third video "image" should be "mom_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[2].image);
        expect(image).toBe("\"mom_s.png\"")
    });       

    it('third video "link" should be "moments"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[2].link);
        expect(image).toBe("\"moments\"")
    });         
    
    it('third video "title" should be "mom_s"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[2].title);
        expect(image).toBe("\"mom_s\"")
    });       
    
    it('third video "type" should be "general"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[2].type);
        expect(image).toBe("\"general\"")
    });     

    /* spec_mom_s video tests */
    it('fourth video "image" should be "spec_mom_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[3].image);
        expect(image).toBe("\"spec_mom_s.png\"")
    });       

    it('fourth video "link" should be "moments"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[3].link);
        expect(image).toBe("\"moments\"")
    });         
    
    it('fourth video "title" should be "spec_mom_s"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[3].title);
        expect(image).toBe("\"spec_mom_s\"")
    });       
    
    it('fourth video "type" should be "specific"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[3].type);
        expect(image).toBe("\"specific\"")
    });         

    /* gravity_s video tests */
    it('fifth video "image" should be "gravity_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[4].image);
        expect(image).toBe("\"gravity_s.png\"")
    });       

    it('fifth video "link" should be "gravity"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[4].link);
        expect(image).toBe("\"gravity\"")
    });         
    
    it('fifth video "title" should be "gravity_s"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[4].title);
        expect(image).toBe("\"gravity_s\"")
    });       
    
    it('fifth video "type" should be "general"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[4].type);
        expect(image).toBe("\"general\"")
    });       

    /* spec_gravity_s video tests */
    it('sixth video "image" should be "spec_gravity_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[5].image);
        expect(image).toBe("\"spec_gravity_s.png\"")
    });       

    it('sixth video "link" should be "gravity"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[5].link);
        expect(image).toBe("\"gravity\"")
    });         
    
    it('sixth video "title" should be "spec_gravity_s"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[5].title);
        expect(image).toBe("\"spec_gravity_s\"")
    });       
    
    it('sixth video "type" should be "specific"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[5].type);
        expect(image).toBe("\"specific\"")
    });       
});

describe('Title Element Tests', () => {
    it('the JSON element "balances.hint.titleColumn should have 3 elements', () => {
        expect(Object.keys(pageData.balances.hint.title).length).toBe(3)
    });

    /* title[0] */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (first) should equal "overall"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[0].linkTitle);
        expect(data).toBe("\"overall\"")
    });   

    it('the JSON element "balances.hint.titleColumn.linkTitle" (first) should equal "Overall solution strategy"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[0].rowTitle);
        expect(data).toBe("\"Overall solution strategy\"")
    });   

    /* title[1] */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (second) should equal "moments"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[1].linkTitle);
        expect(data).toBe("\"moments\"")
    });   

    it('the JSON element "balances.hint.titleColumn.linkTitle" (second) should equal "Moments"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[1].rowTitle);
        expect(data).toBe("\"Moments\"")
    }); 
    
    /* title[2] */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (third) should equal "gravity"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[2].linkTitle);
        expect(data).toBe("\"gravity\"")
    });   

    it('the JSON element "balances.hint.titleColumn.linkTitle" (third) should equal "Gravity"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[2].rowTitle);
        expect(data).toBe("\"Gravity\"")
    });      
    
});

describe('Question Tests', () => {
    /* title - this would be the url */
    it('the JSON element "questions.title" should equal "Balances"', () => {
        const data = JSON.stringify(pageData.balances.questions.title);
        expect(data).toBe("\"Balances\"")
    });   

    /* the full question */
    it('the JSON element "questions.fullquestion.question" should equal "Balances"', () => {
        const expectedText = "\"Three balances are supported on rigid pivots and connected by two flexible light strings as shown in the diagram above. Note that the centre balance operates upside down compared to the other two. What value of mass X will enable the system to balance?\"";
        const data = JSON.stringify(pageData.balances.questions.fullquestion.question);
        expect(data).toBe(expectedText)
    });   
   
});

describe('Answer Tests', () => {
    it.only('should have 5 answers', () => {        
        expect(Object.keys(pageData.balances.questions.fullquestion.answer).length).toBe(5)
    });

    it('the JSON element "questions.title" should equal "Balances"', () => {
        const data = JSON.stringify(pageData.balances.questions.title);
        expect(data).toBe("\"Balances\"")
    });   

    /* the full question */
    it('the JSON element "questions.fullquestion.question" should equal "Balances"', () => {
        const expectedText = "\"Three balances are supported on rigid pivots and connected by two flexible light strings as shown in the diagram above. Note that the centre balance operates upside down compared to the other two. What value of mass X will enable the system to balance?\"";
        const data = JSON.stringify(pageData.balances.questions.fullquestion.question);
        expect(data).toBe(expectedText)
    });   
   
});