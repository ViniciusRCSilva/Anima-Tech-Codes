using System;
using System.Collections.Generic;

namespace aula12
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> pessoas = new List<string>();
            List<string> backup = new List<string>();

            pessoas.Add("Vinicius");
            pessoas.Add("Ricardo");
            pessoas.Add("Paulo");

            backup.Add("Fernando");
            backup.Add("Debora");

            backup.AddRange(pessoas);
            
            foreach (string b in backup)
            {
                Console.WriteLine($" {b} ");
            }
        }
    }
}
