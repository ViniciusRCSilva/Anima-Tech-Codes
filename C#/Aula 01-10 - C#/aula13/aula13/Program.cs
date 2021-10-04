using System;
using System.Collections.Generic;

namespace aula13
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> cidades = new List<string>();

            cidades.Add("Jaboatão");
            cidades.Add("Olinda");
            cidades.Add("Recife");

            String[] backup = new String[cidades.Count];

            cidades.CopyTo(backup, 0);

            foreach(string b in backup)
            {
                Console.WriteLine($" {b} ");
            }
        }
    }
}
