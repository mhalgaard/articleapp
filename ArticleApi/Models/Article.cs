using System;
using System.Collections.Generic;
public class Article {
    public long Id { get; set; }
    public string Author { get; set; }
    public string Title { get; set; }
    public string Desc { get; set; }
    public int Year { 
        get => year;
        set 
        {
            year = DateTime.Now.Year;
        }
    }
    private int year;
    public string Tag { get; set; }
    public bool IsPublished { get; set; }
}