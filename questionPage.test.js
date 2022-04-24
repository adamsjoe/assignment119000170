const loadPage = require('./questionPage');

pageData = require('./data/balances.json');

const validUrlText = 'balances'
const invalidUrlText = 'kangaroo'

describe('Page URL Tests', () => {
    /* this only searches the JSON for an instance of the word "balances" - this is a fairly weak test */
    it('should find data for a valid URL', () => {
        const data = JSON.stringify(pageData);
        expect(data).toContain(validUrlText)
    });

    /* this test ensures the node is present */
    it('should find a JSON node for the Valid URL text', () => {
        // const data = JSON.stringify(pageData.balances);
        expect(pageData.balances).toBeTruthy()
    });


    /* negative test */
    it('should find no data for an invalid utl text', () => {
        const data = JSON.stringify(pageData);
        expect(data).not.toContain(invalidUrlText)
    });

    /* we can check for the node not being present (as in the positive test) */
    it('should not find a JSON node for the invalid text', () => {        
        expect(pageData.kangaroo).toBeFalsy()
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
        expect(typeof pageData.balances.hint.titleColumn[0].linkTitle).toBe('string')
    });

    it('the JSON element "balances.hint.titleColumn.columnTitle" (first) should equal "Hints"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[0].columnTitle);
        expect(data).toBe("\"Hints\"")
        expect(typeof pageData.balances.hint.titleColumn[0].columnTitle).toBe('string')
    });    

    /* general */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (second) should equal "general"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[1].linkTitle);
        expect(data).toBe("\"general\"")
        expect(typeof pageData.balances.hint.titleColumn[1].linkTitle).toBe('string')
    });

    it('the JSON element "balances.hint.titleColumn.columnTitle" (second) should equal "General"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[1].columnTitle);
        expect(data).toBe("\"General\"")
        expect(typeof pageData.balances.hint.titleColumn[1].columnTitle).toBe('string')
    });        

    /* specific */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (third) should equal "specific"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[2].linkTitle);
        expect(data).toBe("\"specific\"")
        expect(typeof pageData.balances.hint.titleColumn[2].linkTitle).toBe('string')
    });

    it('the JSON element "balances.hint.titleColumn.columnTitle" (third) should equal "Specific to this problem"', () => {
        const data = JSON.stringify(pageData.balances.hint.titleColumn[2].columnTitle);
        expect(data).toBe("\"Specific to this problem\"")
        expect(typeof pageData.balances.hint.titleColumn[2].columnTitle).toBe('string')
    });      
    
});

describe('Videos Present Tests', () => {
    it('should have 6 videos', () => {        
        expect(Object.keys(pageData.balances.hint.video).length).toBe(6)
    });

    /* problem_s video tests */
    it('first video "image" should be "problem_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[0].image);
        expect(image).toBe("\"problem_s.png\"")
        expect(typeof pageData.balances.hint.video[0].image).toBe('string')
    });       

    it('first video "link" should be "overall"', () => {
        const link = JSON.stringify(pageData.balances.hint.video[0].link);
        expect(link).toBe("\"overall\"")
        expect(typeof pageData.balances.hint.video[0].link).toBe('string')
    });         
    
    it('first video "title" should be "problem_s"', () => {
        const title = JSON.stringify(pageData.balances.hint.video[0].title);
        expect(title).toBe("\"problem_s\"")
        expect(typeof pageData.balances.hint.video[0].title).toBe('string')
    });       
    
    it('first video "type" should be "general"', () => {
        const type = JSON.stringify(pageData.balances.hint.video[0].type);
        expect(type).toBe("\"general\"")
        expect(typeof pageData.balances.hint.video[0].type).toBe('string')
    });           

    /* spec_strat_balan_s video tests */
    it('second video "image" should be "spec_strat_balan_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[1].image);
        expect(image).toBe("\"spec_strat_balan_s.png\"")
        expect(typeof pageData.balances.hint.video[1].image).toBe('string')
    });       

    it('second video "link" should be "overall"', () => {
        const link = JSON.stringify(pageData.balances.hint.video[1].link);
        expect(link).toBe("\"overall\"")
        expect(typeof pageData.balances.hint.video[1].link).toBe('string')
    });         
    
    it('second video "title" should be "spec_strat_balan_s"', () => {
        const title = JSON.stringify(pageData.balances.hint.video[1].title);
        expect(title).toBe("\"spec_strat_balan_s\"")
        expect(typeof pageData.balances.hint.video[1].title).toBe('string')
    });       
    
    it('second video "type" should be "specific"', () => {
        const type = JSON.stringify(pageData.balances.hint.video[1].type);
        expect(type).toBe("\"specific\"")
        expect(typeof pageData.balances.hint.video[1].type).toBe('string')
    });        

    /* mom_s video tests */
    it('third video "image" should be "mom_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[2].image);
        expect(image).toBe("\"mom_s.png\"")
        expect(typeof pageData.balances.hint.video[2].image).toBe('string')
    });       

    it('third video "link" should be "moments"', () => {
        const link = JSON.stringify(pageData.balances.hint.video[2].link);
        expect(link).toBe("\"moments\"")
        expect(typeof pageData.balances.hint.video[2].link).toBe('string')
    });         
    
    it('third video "title" should be "mom_s"', () => {
        const title = JSON.stringify(pageData.balances.hint.video[2].title);
        expect(title).toBe("\"mom_s\"")
        expect(typeof pageData.balances.hint.video[2].title).toBe('string')
    });       
    
    it('third video "type" should be "general"', () => {
        const type = JSON.stringify(pageData.balances.hint.video[2].type);
        expect(type).toBe("\"general\"")
        expect(typeof pageData.balances.hint.video[2].type).toBe('string')
    });     

    /* spec_mom_s video tests */
    it('fourth video "image" should be "spec_mom_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[3].image);
        expect(image).toBe("\"spec_mom_s.png\"")
        expect(typeof pageData.balances.hint.video[3].image).toBe('string')
    });       

    it('fourth video "link" should be "moments"', () => {
        const link = JSON.stringify(pageData.balances.hint.video[3].link);
        expect(link).toBe("\"moments\"")
        expect(typeof pageData.balances.hint.video[3].link).toBe('string')
    });         
    
    it('fourth video "title" should be "spec_mom_s"', () => {
        const title = JSON.stringify(pageData.balances.hint.video[3].title);
        expect(title).toBe("\"spec_mom_s\"")
        expect(typeof pageData.balances.hint.video[3].title).toBe('string')
    });       
    
    it('fourth video "type" should be "specific"', () => {
        const type = JSON.stringify(pageData.balances.hint.video[3].type);
        expect(type).toBe("\"specific\"")
        expect(typeof pageData.balances.hint.video[3].type).toBe('string')
    });         

    /* gravity_s video tests */
    it('fifth video "image" should be "gravity_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[4].image);
        expect(image).toBe("\"gravity_s.png\"")
        expect(typeof pageData.balances.hint.video[4].image).toBe('string')
    });       

    it('fifth video "link" should be "gravity"', () => {
        const link = JSON.stringify(pageData.balances.hint.video[4].link);
        expect(link).toBe("\"gravity\"")
        expect(typeof pageData.balances.hint.video[4].link).toBe('string')
    });         
    
    it('fifth video "title" should be "gravity_s"', () => {
        const title = JSON.stringify(pageData.balances.hint.video[4].title);
        expect(title).toBe("\"gravity_s\"")
        expect(typeof pageData.balances.hint.video[4].title).toBe('string')
    });       
    
    it('fifth video "type" should be "general"', () => {
        const type = JSON.stringify(pageData.balances.hint.video[4].type);
        expect(type).toBe("\"general\"")
        expect(typeof pageData.balances.hint.video[4].type).toBe('string')
    });       

    /* spec_gravity_s video tests */
    it('sixth video "image" should be "spec_gravity_s.png"', () => {
        const image = JSON.stringify(pageData.balances.hint.video[5].image);
        expect(image).toBe("\"spec_gravity_s.png\"")
        expect(typeof pageData.balances.hint.video[5].image).toBe('string')
    });       

    it('sixth video "link" should be "gravity"', () => {
        const link = JSON.stringify(pageData.balances.hint.video[5].link);
        expect(link).toBe("\"gravity\"")
        expect(typeof pageData.balances.hint.video[5].link).toBe('string')
    });         
    
    it('sixth video "title" should be "spec_gravity_s"', () => {
        const title = JSON.stringify(pageData.balances.hint.video[5].title);
        expect(title).toBe("\"spec_gravity_s\"")
        expect(typeof pageData.balances.hint.video[5].title).toBe('string')
    });       
    
    it('sixth video "type" should be "specific"', () => {
        const type = JSON.stringify(pageData.balances.hint.video[5].type);
        expect(type).toBe("\"specific\"")
        expect(typeof pageData.balances.hint.video[5].type).toBe('string')
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
        expect(typeof pageData.balances.hint.title[0].linkTitle).toBe('string')
    });   

    it('the JSON element "balances.hint.titleColumn.linkTitle" (first) should equal "Overall solution strategy"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[0].rowTitle);
        expect(data).toBe("\"Overall solution strategy\"")
        expect(typeof pageData.balances.hint.title[0].rowTitle).toBe('string')
    });   

    /* title[1] */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (second) should equal "moments"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[1].linkTitle);
        expect(data).toBe("\"moments\"")
        expect(typeof pageData.balances.hint.title[1].linkTitle).toBe('string')
    });   

    it('the JSON element "balances.hint.titleColumn.linkTitle" (second) should equal "Moments"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[1].rowTitle);
        expect(data).toBe("\"Moments\"")
        expect(typeof pageData.balances.hint.title[1].rowTitle).toBe('string')
    }); 
    
    /* title[2] */
    it('the JSON element "balances.hint.titleColumn.linkTitle" (third) should equal "gravity"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[2].linkTitle);
        expect(data).toBe("\"gravity\"")
        expect(typeof pageData.balances.hint.title[2].linkTitle).toBe('string')
    });   

    it('the JSON element "balances.hint.titleColumn.linkTitle" (third) should equal "Gravity"', () => {
        const data = JSON.stringify(pageData.balances.hint.title[2].rowTitle);
        expect(data).toBe("\"Gravity\"")
        expect(typeof pageData.balances.hint.title[2].rowTitle).toBe('string')
    });      
    
});

describe('Question Tests', () => {
    /* title - this would be the url */
    it('the JSON element "questions.title" should equal "Balances"', () => {
        const data = JSON.stringify(pageData.balances.questions.title);
        expect(data).toBe("\"Balances\"")
        expect(typeof pageData.balances.questions.title).toBe('string')
    });   

    /* the full question */
    it('the JSON element "questions.fullquestion.question" should equal "Balances"', () => {
        const expectedText = "\"Three balances are supported on rigid pivots and connected by two flexible light strings as shown in the diagram above. Note that the centre balance operates upside down compared to the other two. What value of mass X will enable the system to balance?\"";
        const data = JSON.stringify(pageData.balances.questions.fullquestion.question);
        expect(data).toBe(expectedText)
        expect(typeof pageData.balances.questions.fullquestion.question).toBe('string')
    });   
   
});

describe('Answer Tests', () => {
    it('should have 5 answers', () => {        
        expect(Object.keys(pageData.balances.questions.fullquestion.answer).length).toBe(5)
    });

    /* first answer */
    /* have to escape the double slash with yet more double slashes! */
    it('the first answer "pageData.balances.questions.fullquestion.answer[0].text" should be "\\[ 10 \\mbox{ kg.} \\]"', () => {        
        const data = JSON.stringify(pageData.balances.questions.fullquestion.answer[0].text);
        expect(data).toBe("\"\\\\[ 10 \\\\mbox{ kg.} \\\\]\"")
        expect(typeof pageData.balances.questions.fullquestion.answer[0].text).toBe('string')
    }); 


    it('the first answer "pageData.balances.questions.fullquestion.answer[0].correct" should be false', () => {        
        expect(pageData.balances.questions.fullquestion.answer[0].correct).toBeFalsy()
    });  

    /* second answer */
    it('the second answer "pageData.balances.questions.fullquestion.answer[1].text" should be "\\[ 1260 \\mbox{ kg.} \\]"', () => {        
        const data = JSON.stringify(pageData.balances.questions.fullquestion.answer[1].text);
        expect(data).toBe("\"\\\\[ 1260 \\\\mbox{ kg.} \\\\]\"")
        expect(typeof pageData.balances.questions.fullquestion.answer[1].text).toBe('string')        
    }); 

    it('the second answer "pageData.balances.questions.fullquestion.answer[1].correct" should be false', () => {        
        expect(pageData.balances.questions.fullquestion.answer[1].correct).toBeFalsy()
    });

    /* third answer */
    it('the third answer "pageData.balances.questions.fullquestion.answer[2].text" should be "\\[ 1\\frac{17}{28} \\mbox{ kg.} \\]"', () => {        
        const data = JSON.stringify(pageData.balances.questions.fullquestion.answer[2].text);
        expect(data).toBe("\"\\\\[ 1\\\\frac{17}{28} \\\\mbox{ kg.} \\\\]\"")
        expect(typeof pageData.balances.questions.fullquestion.answer[2].text).toBe('string')             
    }); 

    it('the third answer "pageData.balances.questions.fullquestion.answer[2].correct" should be false', () => {        
        expect(pageData.balances.questions.fullquestion.answer[2].correct).toBeFalsy()
    });

    /* fourth answer */
    it('the fourth answer "pageData.balances.questions.fullquestion.answer[3].text" should be "\\[ 62\\frac{2}{9} \\mbox{ kg.} \\]"', () => {        
        const data = JSON.stringify(pageData.balances.questions.fullquestion.answer[3].text);
        expect(data).toBe("\"\\\\[ 62\\\\frac{2}{9} \\\\mbox{ kg.} \\\\]\"")
        expect(typeof pageData.balances.questions.fullquestion.answer[3].text).toBe('string')     
    }); 

    it('the fourth answer "pageData.balances.questions.fullquestion.answer[3].correct" should be false', () => {        
        expect(pageData.balances.questions.fullquestion.answer[3].correct).toBeTruthy()
    });

    /* fifth answer */
       it('the fifth answer "pageData.balances.questions.fullquestion.answer[4].text" should be "None of the above."', () => {        
        const data = JSON.stringify(pageData.balances.questions.fullquestion.answer[4].text);
        expect(data).toBe("\"None of the above.\"")
        expect(typeof pageData.balances.questions.fullquestion.answer[4].text).toBe('string')     
    }); 

    it('the fifth answer "pageData.balances.questions.fullquestion.answer[4].correct" should be false', () => {        
        expect(pageData.balances.questions.fullquestion.answer[4].correct).toBeFalsy()
    });

});